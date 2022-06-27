<template>
  <v-app>
    <CeseatNavbar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CeseatNavbar from '@/components/organism/header/CeseatNavbar.vue'

export default defineComponent({
  name: 'App',
  components:{CeseatNavbar},
  data () {
    return {
    
    }
  },
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
})
</script>
