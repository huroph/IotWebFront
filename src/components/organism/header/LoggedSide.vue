<template>
  <v-list-item-group active-class="deep-purple--text text--accent-4" >
    <v-list-item v-for="(link, index) in links">
      <v-list-item-title>
        <router-link style="text-decoration: none; color: inherit;" :to="link.path">
          <button>{{ link.name }}</button>
        </router-link>
      </v-list-item-title>
    </v-list-item>
  </v-list-item-group>
</template>

<script lang="ts">
export default {
  name: "NotLoggedSide",
  data: function () {
    const restauLinks = [
      {
        name: "Modifier les produits",
        path: "/productEdit"
      }
    ]
    const userLinks = [
      {
        name: "Vous etes restaurateur ?",
        path: "/createRestaurant"
      },
      {
        name: "Devenir livreur ?",
        path: "/register"
      },
      {
        name: "Mes commandes",
        path: "/user/orders"
      }
    ]
    const deliverLinks = [
      {
        name: "Mes livraisons",
        path: "/user/delivery"
      }
    ]
    const publicLinks = [
      {
        name: "Modifier mon compte",
        path: "/editAccount"
      },{
        name: "Modifier mon mot de passe",
        path: "/editPassword"
      },{
        name: "Supprimer mon compte",
        path: "/deleteAccount"
      },{
        name: "Déconnexion",
        path: "/logout"
      }
    ]
    const role = this.$store.state.user.role
    switch (role) {
      case "restau":
        return {
          links: restauLinks.concat(publicLinks)
        }
      case "deliverer":
        return {
          links: deliverLinks.concat(publicLinks)
        }
      case "client":
        return {
          links: userLinks.concat(publicLinks)
        }
      default:
        return {
          links: publicLinks
        }
    }


  }
}
</script>

<style scoped>

</style>