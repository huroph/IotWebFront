<template>

  <div class="category" v-for="item in destination">
    <div v-on:click="changeCategory(item._id)">
      <div class="icon" >
        <img :src="`/categories/${item.name}.png`" width="50" height="50"/>
      </div>

      <div style="text-align:center">
        {{ item.name }}
      </div>
    </div>

  </div>


</template>


<script lang="ts">

import { RestaurantCategory } from "@/models/restaurantCategory.model";
import {RestaurantService} from "@/services/restaurant.service";

export default {
  mounted: async function(){
    const result = await new RestaurantService().getCategories({}, this.$store, this.$router);
    console.log(result);
    if (result.success){
      this.destination = [new RestaurantCategory({
        _id: "*",
        name: "all",
      })].concat(result.data)
    }else{
      this.destination = []
    }
  },
  data() {
    return {
      destination: [],
    }
  },
  methods: {
    changeCategory(categoryId: any) {
      this.$emit('categoryId', {data: categoryId})
      console.log(categoryId)
    }
  },
};
</script>


<style scoped>

.category{
  cursor: pointer;

}
.icon{
  display: flex;
  justify-content: center;
  justify-items: center;
  width: 60px;

}
.icon:hover{
  background-color: #eaeaea;
  border-radius: 60px;
}


</style>