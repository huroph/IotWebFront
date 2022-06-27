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
  data: () => ({
    links: [
      {
        name: "Créez un compte professionnel",
        path: "/loginPro"
      },
      {
        name: "Devenir livreur",
        path: "/register"
      },{
        name: "Modifier mon compte",
        path: "/editAccount"
      },{
        name: "Modifier mon mot de passe",
        path: "/editPassword"
      }
    ]
  })
}
</script>

<style scoped>

</style>