<template>

  <v-col v-for="card in cards" :key="card.title" :cols="card.cols">

    <v-card class=" productCard">


      <v-img :src="card.src" class="white--text align-end"  style="position: relative" height="500px">
        <v-btn class="close">X
        </v-btn>

      </v-img>
      <v-card-title>
        <h1 class="title">{{card.title}}</h1>
      </v-card-title>

      <h5>
        <v-card-subtitle h5 v-text="card.content"></v-card-subtitle>
      </h5>
      <v-card-actions>
        <v-card-title > <h2 class="title">{{card.price}}</h2></v-card-title>
        <v-spacer></v-spacer>


      </v-card-actions>

      <div style="flex-direction: row;display: flex;margin-left: 30px">
        <v-btn icon=""><h1>-</h1></v-btn>
        <h1 class="count">0</h1>
        <v-btn icon=""><h1>+</h1></v-btn>
        <v-spacer></v-spacer>
        <v-btn class="AddToCart"><h3>Ajouter</h3></v-btn>
      </div>
    </v-card>
  </v-col>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.productCard {
  width: 624px !important;
  height: 711px !important;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 50px 50px 50px 50px !important;
}
.productCard .close {
  background-color: white;
  width:48px!important;
  height:48px;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0!important;
  min-width: 48px;
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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>

<script lang="ts" >
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