<template>

  <nav>
    <v-app-bar dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link style="text-decoration: none; color: inherit;" to="/">
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Ces</span>
          <span class="font-weight-bold">eat</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-text-field hide-details filled label="Livraison à CESI AIX" prepend-inner-icon="mdi-map-marker" rounded disabled>
      </v-text-field>
      <v-spacer></v-spacer>

      <div class="my-2">
        <v-btn
            @click="cartDrawer = true"
            icon
            v-if="isLoggedIn"
        > <v-icon >mdi-cart</v-icon>
          <v-badge
              color="error"
              :content="1/*cartData.reduce((accumulator, object) => {
        return accumulator + object.quantity;
      }, 0)*/"
          ></v-badge>
        </v-btn>
      </div>
      <logged-btn v-if="isLoggedIn"></logged-btn>
      <not-logged-btn v-else></not-logged-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <logged-side v-if="isLoggedIn"></logged-side>
        <not-logged-side v-else></not-logged-side>

      </v-list>
    </v-navigation-drawer>

    <!-- Cart Drawer  -->

    <v-navigation-drawer  v-model="cartDrawer" absolute temporary location="right"  width="300">
      <CartItems/>
    </v-navigation-drawer>


  </nav>
</template>


<style scoped >
  v-navigation-drawer{
    background-color: #fafafa;
  }


  .v-responsive {
    max-width: 20% !important;
    max-height: 20% !important;
  }
</style>
<script>

import ButtonPrimary from "../../atoms/button/ButtonPrimary.vue"
import CartItems from "@/components/organism/header/CartItems.vue"
import {mapState} from "vuex";
import NotLoggedBtn from "./NotLoggedBtn.vue"
import LoggedBtn from "./LoggedBtn.vue"
import LoggedSide from "@/components/organism/header/LoggedSide.vue";
import NotLoggedSide from "@/components/organism/header/NotLoggedSide.vue";



export default {
  components: {CartItems, NotLoggedBtn, LoggedBtn, NotLoggedSide, LoggedSide},
  data: function (){
    return{
    drawer: false,
    cartDrawer: false,
    cartData: this.$store.state.cart.products,
  }
  },
  computed: mapState({
    isLoggedIn: state => state.token.isLogged,
  }),

}

</script>