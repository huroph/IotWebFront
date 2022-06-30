<template>
  <button class="btnBack" @click="goBack">Retour</button>
</template>

<script>
export default {
  name: "goBack.vue",
  methods:{
    goBack() {
      return this.$router.go(-1)
    }

  },
}
</script>

<style lang="scss" scoped>
.btnBack{
  text-align: center;
  border-radius: 25px;
  background-color: #000000;
  width: 100px;
  height: 30px;
  margin: 20px;
  color:white;
&:hover {
   transform: scale(1.1);
   box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
 }
}
</style>