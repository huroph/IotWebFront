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
import CeseatNavbar from '@/components/header/CeseatNavbar.vue'

export default defineComponent({
  name: 'App',
  components:{CeseatNavbar},
  data () {
    return {
    
    }
  },
})
</script>
