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
        name: "Modifier mon restaurant",
        path: "/restaurant/edit"
      },{
        name: "Modifier les produits",
        path: "/product/list"
      },
    ]
    const userLinks = [
      {
        name: "Vous etes restaurateur ?",
        path: "/restaurant/create"
      },
      {
        name: "Devenir livreur ?",
        path: "/register"
      },
      {
        name: "Mes commandes",
        path: "/user/orderdetails"
      }
    ]
    const deliverLinks = [
      {
        name: "Mes livraisons",
        path: "/user/delivery"
      }
    ]
    const adminLinks = [
      {
        name: "Liste des restaurants",
        path: "/restaurant/list"
      }
    ]
    const publicLinks = [
      {
        name: "Modifier mon compte",
        path: "/user/edit"
      },{
        name: "Modifier mon mot de passe",
        path: "/user/editPwd"
      },{
        name: "Supprimer mon compte",
        path: "/user/delete"
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
      case "techServ":
        return {
          links: adminLinks.concat(publicLinks)
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