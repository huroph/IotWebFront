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
      <v-text-field hide-details filled label="Prepend inner" prepend-inner-icon="mdi-map-marker" rounded>
      </v-text-field>
      <v-spacer></v-spacer>
      <div class="my-2">
        <v-btn
            @click="cartDrawer = true"
            icon
        > <v-icon >mdi-cart</v-icon>
          <v-badge
              color="error"
              content="1"
          ></v-badge>
        </v-btn>
        <router-link style="text-decoration: none; color: inherit;" to="/Login">
          <v-btn
              append
          >Connexion</v-btn>
        </router-link>
      </div>

      <router-link style="text-decoration: none; color: inherit;" to="/Register">
        <v-btn
            append
        >INSCRIPTION</v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer  v-model="drawer" absolute temporary  >
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
          <v-list-item >

            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/Login">
                <v-btn
                    append
                >Connexion</v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>

            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/Register">
                <v-btn
                    append
                >INSCRIPTION</v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/LoginPro">
                <button
                >Créez un compte professionnel</button>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/Login">
                <button

                >Devenir livreur</button>
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-navigation-drawer  v-model="cartDrawer" absolute temporary location="right"  width="300">
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
          <v-list-item >
            <v-list-item-title>
              VOTRE PANIER
            </v-list-item-title>

          </v-list-item>

          <v-list-item>
            <v-img class="img" src="./src/assets/products/burger.png" >
            </v-img>
            <v-list-item-title>
              menue 280
            </v-list-item-title>
            <v-spacer></v-spacer>
            x 1
          </v-list-item>
          <v-list-item>
            <v-img class="img" src="./src/assets/products/burger.png" >
            </v-img>
            <v-list-item-title>
              menue 280
            </v-list-item-title>
            <v-spacer></v-spacer>
            x 1
          </v-list-item>
          <v-list-item>
            <v-img class="img" src="./src/assets/products/burger.png" >
            </v-img>
            <v-list-item-title>
              menue 280
            </v-list-item-title>
            <v-spacer></v-spacer>
            x 1
          </v-list-item>


        </v-list-item-group>
        
      </v-list>
    </v-navigation-drawer>
  </nav>

</template>


<style scoped >
  v-navigation-drawer{
    background-color: #fafafa;
  }


  ::v-deep .v-responsive {
    max-width: 20% !important;
    max-height: 20% !important;
  }
</style>
<script >

import ButtonPrimary from "../../atoms/button/ButtonPrimary.vue"



export default {
  data: () => ({
    drawer: false,
    group: null,
    cartDrawer: false,

  }),
}

</script>