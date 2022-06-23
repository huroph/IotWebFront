<template>
  <div class="containers">
    <div class="img-header">
    </div>
    <div class="title">
      <h1 style="font-weight: bold">{{ destination.name }}</h1>
      <h3 style="font-weight:normal!important;" >Menu</h3>
    </div>
    <div class="grid-container">
      <ProductItem :cards="cards"/>
    </div>
    </div>
</template>

<style lang="scss" scoped>

.grid-container {

  padding: 1em;
  display: flex;
   justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  column-count: 4;

}

.img-header{
  background-image: url("../assets/McdoBG.jpeg");
  width: 100%;
  height: 134px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.title{
  font-family: "Bambou Sans";
  color: black;
  margin-top: 10px;
  margin-left: 10px;
}

</style>
<script>

import ProductItem from "../components/molecules/cards/productItem.vue";
import MenueItems from "../components/molecules/cards/MenueItems.vue";
import sourceData from "@/data.json"
export default {
  components: {MenueItems, ProductItem, },
  computed:{
    destinationId(){
      return this. $route.params.name
    },
    destination(){
      return sourceData.find(destination => destination.name === this.destinationId  )
    }

  },
  data(){
    return{
      cards:[
        {
          title:"Mcdonald's",
          content:"jaime les frites",
          price : 9.99,
        },
        {
          title:"mcdo",
          content:"jaime les frites",
          price : 9.99,
        },
        {
          title:"mcdo",
          content:"jaime les frites",
          price : 9.99,
        },
      ]
    }
  }

}
</script>