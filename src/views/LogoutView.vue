<template>
  <button @click="logout">logout</button>
</template>

<script lang="ts">
import { LogoutService } from "@/services/logoutService";
import {mapState} from "vuex";

export default {
  name: "LogoutView",
  methods:{
    logout(){
      this.$swal({
        title: "test",
        icon:"error",
        text: ""
      })
    }
  }
}

</script>

<style scoped>

</style>