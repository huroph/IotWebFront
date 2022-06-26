<template>
  <div class="containers">
    <div class="img-header">
    </div>
    <div class="title">
      <h1 style="font-weight: bold">{{ destination.name }}</h1>
      <h3 style="font-weight:normal!important;">Menu</h3>
    </div>
    <div class="grid-container">
      <ProductItem :cards="cardsData"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.grid-container {

  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  column-count: 4;

}

.img-header {
  background-image: url("../assets/McdoBG.jpeg");
  width: 100%;
  height: 134px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.title {
  font-family: "Bambou Sans";
  color: black;
  margin-top: 10px;
  margin-left: 10px;
}

</style>
<script>

import ProductItem from "../components/molecules/cards/productItem.vue";
import MenueItems from "../components/molecules/cards/MenueItems.vue";
import sourceData from "@/data.json"

export default {
  components: {ProductItem,},
  computed: {
    destinationId() {
      return parseInt(this.$route.params.restauId)
    },
    destination() {
      return sourceData['restaurants'].find(destination => destination.id === this.destinationId);
    },
    cardsData() {
      const cardData = [];
      this.cards.forEach((card) => {
        if (card.restauId === this.destinationId) cardData.push(card);
      });
      return cardData
    }
  },
  data() {
    return {
      cards: [
        {
          restauId: 1,
          title: "Mcdonald's",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          restauId: 2,
          title: "mcdo",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          restauId: 2,
          title: "mcdo",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          restauId: 1,
          title: "mcdo",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          restauId: 1,
          title: "mcdo",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          restauId: 1,
          title: "mcdo",
          content: "jaime les frites",
          price: 9.99,
        },
      ]
    }
  }

}
</script>