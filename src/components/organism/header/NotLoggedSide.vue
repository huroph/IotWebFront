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
        name: "Connexion",
        path: "/login"
      },
      {
        name: "Inscription",
        path: "/register"
      }
    ]
  })
}
</script>

<style scoped>

</style>