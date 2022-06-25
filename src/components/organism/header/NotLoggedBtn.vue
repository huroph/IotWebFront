<template>
  <router-link style="text-decoration: none; color: inherit;" to="/login">
    <v-btn
        append
    >Connexion</v-btn>
  </router-link>
  <router-link style="text-decoration: none; color: inherit;" to="/register">
    <v-btn
        append
    >INSCRIPTION</v-btn>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "NotLoggedBtn",
  data: () => ({})
}
</script>

<style scoped>

</style>