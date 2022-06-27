<template>
  <v-list class="cart" nav dense >
    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
      <v-list-item >
        <v-list-item-title>
          VOTRE PANIER
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-img class="img" src="/products/burger.png" >
        </v-img>
        <v-list-item-title>
          menue 280
        </v-list-item-title>
        <v-spacer></v-spacer>
        x 1
      </v-list-item>

    </v-list-item-group>
  </v-list>
<div style="display: flex;align-items: center;flex-direction: column">

  <div style="display: flex;flex-direction: row">
    <h4 style="display: flex;align-items: flex-end;color:grey;font-weight: lighter">Total: </h4>
    <h1>14,80 €</h1>
  </div>
  <a  class="button3">Valider votre panier  <v-icon
      dark
      right
  >
    mdi-checkbox-marked-circle
  </v-icon></a>
</div>


</template>

<script>
export default {
  name: "CartItems.vue"
}
</script>

<style scoped>

.cart{
  height: 85%;
}

a.button3{

  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  background-color:#4eb5f1;
  text-align:center;
  transition: all 0.2s;


}
a.button3:hover{
  background-color:#4095c6;
}
@media all and (max-width:30em){
  a.button3{
    display:block;
    margin:0.2em auto;
    }
}
.bottom{


}
</style>