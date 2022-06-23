<template>

  <div class="containers">
    <v-col v-for="card in cards" :key="card.title" :cols="card.cols">
      <v-card class=" productCard">
        <v-img :src="card.src"   style="position: relative" >
          <v-btn class="close"><p style="color: white">+</p></v-btn>
        </v-img>
        <v-card-title h5 class="title">{{card.title}}
        </v-card-title>
        <v-card-subtitle class="title" style="margin-bottom: 5px" >{{card.price}}</v-card-subtitle>
      </v-card>
    </v-col>
  </div>



</template>



<style lang="scss">
.productCard {
  width: 200px !important;
  height: 100% !important;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;

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
export default {
  data: () => ({
    cards: [
      {
        title: '280 ORIGINAL',
        content: 'Pain spécial, steak haché, emmental et cheddar fondus, oignons, tomate, sauce, ketchup.',
        price: '9.99€',
        src: './src/assets/products/burger.png',
        flex: 4
      },

    ],
  }),
}
</script>