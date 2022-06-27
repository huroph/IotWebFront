<template>
  <v-btn append @click="logout">Déconnexion</v-btn>
</template>

<script lang="ts">
import {LogoutService} from "@/services/logoutService";

export default {
  name: "notLoggedBtn",
  methods:{
    async logout(){
      const res = await new LogoutService().logoutUser(this.$store)
      this.$swal({text: res})
      this.$router.push("/login")
    }
  }
}
</script>

<style scoped>

</style>