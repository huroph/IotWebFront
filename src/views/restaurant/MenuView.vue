<template>
  <div class="containers">
    <div class="img-header">
    </div>
    <div class="title">
      <h1 style="font-weight: bold">{{ restaurantData.name }}</h1>
      <h3 style="font-weight:normal!important;">Menu</h3>
    </div>
    <div class="grid-container">
      <ProductItem :cards="products" :restaurant-id="restaurantId" :restaurant-name="restaurantData.name"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.grid-container {

  padding: 1em;
  flex-wrap: wrap;
  justify-content: space-around;

  flex-direction: row;
  column-count: 4;

}

.img-header {
  background-image: url("../../assets/McdoBG.jpeg");
  width: 100%;
  height: 134px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.title {
  font-family: "Bambou Sans";
  color: black;
  margin-top: 10px;
  margin-left: 10px;
}

</style>
<script lang="ts">

import ProductItem from "../../components/molecules/cards/productCardItem.vue";
import MenueItems from "../../components/molecules/cards/MenueItems.vue";
import {redirectIfNotAllowed} from "@/services/redirectService";
import {RestaurantService} from "@/services/restaurant.service";
import { ProductService } from "@/services/product.service";
import { Restaurant } from "@/models/restaurant.model";

export default {
  components: {ProductItem},
  computed: {

  },
  mounted: async function() {
    if (await redirectIfNotAllowed(['techServ', 'client', "deliverer"], this.$store, this.$router)) {
      // get all restaurants
      let result = await new RestaurantService().get({request: 'getOne', _id:this.restaurantId}, this.$store, this.$router);
      console.log(result);
      if (result.success){
        this.restaurantData = result.data;
      }else{
        this.restaurants = []
      }
      // get all products for this restaurant
      result = await new ProductService().get({request: 'getAll', _id:this.restaurantId}, this.$store, this.$router);
      console.log(result);
      if (result.success){
        this.products = result.data
      }else{
        this.products = []
      }
    }
  },
  data() {
    return {
      restaurantId: (this.$route.params.restauId),
      restaurantData: new Restaurant({_id: this.restaurantId, name: "NAME"}),
      products: [],
      cards: [
        {
          restauId: 1,
          title: "280 Original",
          src: "../products/burger.png",
          content: "jaime les fritesjaime le...",
          price: 9.99,
          id: 3,
        },
        {
          restauId: 1,
          title: "nuggets x20",
          src: "../products/nuggets.png",
          content: "jaime les frites",
          price: 9.99,
          id: 2,
        },
        {
          restauId: 1,
          title: "Big Mac",
          src: "../products/big mac.png",
          content: "jaime les frites",
          price: 9.99,
          id: 1,
        },
        {
          restauId: 2,
          title: "doublesteakhouse",
          src: "../products/doublesteakhouse.jpeg",
          content: "jaime les frites",
          price: 9.99,
          id: 4,
        },
        {
          restauId: 2,
          title: "longchicken",
          src: "../products/longchicken.jpeg",
          content: "jaime les frites",
          price: 9.99,
          id: 5,
        },
        {
          restauId: 2,
          title: "bigKing",
          src: "../products/bigKing.jpeg",
          content: "jaime les frites",
          price: 9.99,
          id: 6,
        },
        {
          restauId: 3,
          title: "californiaMix",
          src: "../products/californiaMix.jpeg",
          content: "jaime les frites",
          price: 9.99,
          id: 7,
        },
        {
          restauId: 3,
          title: "loveboxsaumon",
          src: "../products/loveboxsaumon.jpeg",
          content: "jaime les frites",
          price: 9.99,
          id: 8,
        },
      ],
    }
  }

}
</script>