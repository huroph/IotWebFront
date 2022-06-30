<script lang="ts">
import categoriesItem from "@/components/categoriesItem.vue";
import RestauItem from "@/components/molecules/cards/RestauItem.vue";
import { redirectIfNotAllowed } from "@/services/redirectService";
import {RestaurantService} from "../services/restaurant.service";

export default {
  components: {RestauItem, categoriesItem},
  mounted: async function() {
    try {
      // test if user is allowed to access this page
      if (await redirectIfNotAllowed(['techServ', 'client', "deliverer"], this.$store, this.$router)) {
        // get all restaurants
        const result = await new RestaurantService().get({request: 'getAll'}, this.$store, this.$router);
        console.log(result);
        if (result.success){
          this.restaurants = result.data
        }else{
          this.restaurants = []
        }
        this.filteredRestaurants = this.restaurants;
      }
    }catch (e) {
      console.log(e);
    }
  },
  methods: {
    setCategoryId($event) {
      this.filteredRestaurants = this.restaurants.filter(restau => {
        console.log(restau)
        if ($event.data === '*') return restau;
        else if (restau.restaurantCategory._id === $event.data) return restau;
      });
    },
  },
  computed: {
  },
  data() {
    return {
      restaurants: [],
      filteredRestaurants: []
    }
  }
}
</script>

<template>
  <div class="containers">
    <div class="grid-categories">
      <categoriesItem @categoryId="setCategoryId"/>
    </div>
  </div>


  <div class="containers">
    <div class="nofoundRestau" v-if="filteredRestaurants.length===0">
      <h1>Nous n'avons pas trouvé de restaurant ...</h1>
    </div>
    <div  v-else >
      <h1 class="title">Meilleur resultats </h1>

      <div class="grid-container">

        <RestauItem :restaurants="filteredRestaurants"/>
      </div>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.grid-container {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  column-count: 4;
}

.grid-categories {
  padding: 1em;
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  column-count: 4;
}

.nofoundRestau{
  color: grey;
  text-align:center;
  justify-content:center;
  height: 200px;
  display: flex;
  padding-top: 10%;
}
.title{
  margin: 20px;
}

</style>