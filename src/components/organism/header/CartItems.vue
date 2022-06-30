<template>
  <v-list class="cart" nav dense >
    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" v-for="gg in cartData">
      <v-list-item >
        <v-list-item-title>
          VOTRE PANIER {{gg.restaurantName}}
        </v-list-item-title>
      </v-list-item>
      <div v-for="item in gg.products">
        <v-list-item>
          <v-img class="img" :src="item.src" >
          </v-img>
          <v-list-item-title>
            {{ item.name }} : {{item.unitPrice }} € x {{ item.quantity }}
          </v-list-item-title>
          <v-spacer></v-spacer>
          {{ item.quantity * item.unitPrice }} €
          <v-list-item-action>
            <v-btn style="margin: 5px" width="30" height="30" icon color="red" @click="removeProduct(item.id, gg.restaurantId)">
              <v-icon size="20">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </div>
      <div style="display: flex;flex-direction: row">
        <h4 style="display: flex;align-items: flex-end;color:grey;font-weight: lighter">Total:  </h4>
        <h1> {{ gg.products.reduce((accumulator, object) => {
      return accumulator + object.unitPrice * object.quantity;
    }, 0) }} €</h1>
      </div>


    </v-list-item-group>
  </v-list>
<div style="display: flex;align-items: center;flex-direction: column">

  <div style="display: flex;flex-direction: row">
    <h4 style="display: flex;align-items: flex-end;color:grey;font-weight: lighter">Total: </h4>
    <h1> {{ cartData.reduce((accumulator, object) => {
      return accumulator + object.products.reduce((e, o) => {
        return e + o.quantity*o.unitPrice;
      }, 0);
    }, 0) }} €</h1>
  </div>
    <a  class="button3" @click="validateOrder">Valider votre panier  <v-icon
        dark
        right
    >
      mdi-checkbox-marked-circle
    </v-icon></a>

</div>


</template>

<script lang="ts">
import {OrderService} from "@/services/order.service";

export default {
  name: "CartItems.vue",
  data: function (){
    return {cartData : this.$store.state.cart}
  },
  methods: {
    removeProduct: function (id: Number, restaurantId: Number) {
      this.$store.commit('removeProduct', {id: id, restaurantId: restaurantId})
    },
    validateOrder: async function () {
      const th = this
      let payloads: any[] = []
      let success = true

      await this.$store.state.cart.forEach(
          function (cart){
                      const payload = {
                        itemsId: [].concat.apply([], cart.products.map(function (product) {
                          return Array(product.quantity).fill(product.id)
                        })),
                        restaurantId: cart.restaurantId
                      };
                      payloads.push(payload)
                    }
      )
      for(let i=0; i<payloads.length; i++){
        const payload = payloads[i];
        const res = await new OrderService().validateOrder(payload, this.$store, this.$router);
        if(!res.success){
          success = false
          break;
        }
      }
      if (success){
        this.$swal({
          title: 'Succès',
          text: 'Votre commande a été validée',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
        this.$router.push("/order/list")
      }

      //
    }
  },
  created() {
    console.log(this.$store.state.cart);
  },
  beforeCreate() {

  }
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