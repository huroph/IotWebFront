<template>

<div class="container">
  <img src="biker.gif" alt="Paris" class="center">
  <h1 class="title">
    Votre Commande est bientot prête !
  </h1>

  <div class="slider-container">
    <slider/>
    <h1 class="timetodelivery">7:00min </h1>
  </div>

</div>


</template>

<script lang="ts">
import slider from "../components/molecules/slider.vue";
export default {
  name: "OrderInfoView",
  components: {
    slider
  },
  data: () => ({

  }),
  methods: {

  },
  beforeCreate() {

  }
}
</script>

<style scoped>
.container{
  max-width:100%;
  height: 100%;
  background-color: #fcedec ;
}
.slider-container{
  max-width:80% ;
  margin-left: 10%;
}
.title{
  font-size: 72px;
  text-align: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.timetodelivery{
  font-size: 50px;
}
</style>