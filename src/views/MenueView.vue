

<template>

  <div class="containers">
    <div class="img-header">

    </div>
    <div class="title">
      <h1 style="font-weight: bold">Mcdonald's</h1>
      <h3 style="font-weight:normal!important;" >Menu</h3>
    </div>


    <div class="grid-container">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </div>
    <div class="title">
      <h1 style="font-weight: bold">Mcdonald's</h1>
      <h3 style="font-weight:normal!important;" >Menu</h3>
    </div>
    <div class="grid-container">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>
    <div class="grid-container">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
<menue-items/>
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

import ProductItem from "../components/cards/productItem.vue";
import MenueItems from "../components/cards/MenueItems.vue";
export default {
  components: {MenueItems, ProductItem, }
}
</script>