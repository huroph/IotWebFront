<template>

  <div class="containers">
    <v-row v-for="card in cards" :key="card.name" :cols="card.cols" :x-id="card._id">
      <v-card class=" productCard">
        <v-img :src="card.img"   style="position: relative" >
          <v-btn class="close" @click="addToCart(card._id, card.price, card.name, card.img, $event)"><p style="color: white">+</p></v-btn>
        </v-img>
        <v-card-title h5 class="title">{{card.name}}
        </v-card-title>
        <v-card-subtitle class="title" style="margin-bottom: 5px" >{{card.price}} €</v-card-subtitle>
      </v-card>
    </v-row>
  </div>


</template>



<style lang="scss" scoped>
.productCard {

  cursor: pointer;
  width: 200px !important;
  height: 250px !important;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

}
.productCard .close {
  background-color: black;
  width:30px!important;
  height:30px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 0!important;
  min-width: 30px;
  cursor: pointer;
  border-radius: 50px;
}

.count{
  padding-left: 10px;
  padding-right: 10px;
}

.AddToCart{
  right: 20px;
  width: 180px;
  height: 50px;
  background-color: #ffc107;
  border-radius: 50px;
}
</style>

<script lang="ts">
import {Product} from "@/models/product.model";
import { ProductCart } from "@/models/productCart.model";
import {cartContent} from "@/store/store";

export default {
  name:"productItem",
  props:{
    cards: [],
    restaurantId: {
      type: String,
      required: true
    },
    restaurantName: {
      type: String,
      required: true
    }
  },
  methods:{
    addToCart(id: Number, unitPrice: Number, name: String, src:String, e: any){
      console.log(id);
      console.log(this.restaurantId);
      console.log(this.restaurantName);
      console.log(unitPrice);
      //this.$store.commit('emptyCart')
      this.$store.commit("addToCart", new cartContent({restaurantId: this.restaurantId, restaurantName:this.restaurantName, products:[new ProductCart({id: id, unitPrice: unitPrice, name: name, src:src})]}) );

    },
  },
  created() {
    console.log(this.$store.state.cart);
  }

}
</script>