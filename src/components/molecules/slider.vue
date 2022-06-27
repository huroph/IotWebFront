<template>
  <v-slider
      v-model="slider1"
      :ticks="tickLabels"
      :max="3"
      step="1"
      show-ticks="always"
      tick-size="4"
      disabled="true"
      track-color="red"


  ></v-slider>
</template>

<script>
export default {
  name: "OrderInfoView.vue",
  data() {
    return {
      slider1: 1,
      tickLabels: {
        0: 'On prends votre commande',
        1: 'En cour de Préparation',
        2: 'En cour de livraison',
        3: 'livré !',
      },
    }
  },
}
</script>

<style scoped>

</style>