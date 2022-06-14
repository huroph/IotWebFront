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

        <router-link style="text-decoration: none; color: inherit;" to="/Login">
          <v-btn
              append
          >Connexion</v-btn>
        </router-link>
      </div>

      <router-link style="text-decoration: none; color: inherit;" to="/Register">
        <v-btn >
          INSCRIPTION
        </v-btn>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>

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
                <v-btn >
                  INSCRIPTION
                </v-btn>
              </router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>

            <v-list-item-title>
              <router-link style="text-decoration: none; color: inherit;" to="/LoginPro">
                <button
                >Créez un compte proffssionnel</button>
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


  </nav>

</template>


<style >
  v-navigation-drawer{
    background-color: #fafafa;
  }

</style>
<script lang="ts">
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>