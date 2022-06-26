
<script>
import categoriesItem from "@/components/categoriesItem.vue";
import sourceData from "@/data.json"
import RestauItem from "@/components/molecules/cards/RestauItem.vue";
export default {
  components: {RestauItem, categoriesItem},
  computed: {
    destinationId() {
      return parseInt(this.$route.params.categoryId)
    },
    destination() {
      return sourceData['categories'].find(destination => destination.id === this.destinationId);
    },
    cardsData() {
      const cardData = [];
      this.cards.forEach((card) => {
        if (card.categoryId === this.destinationId) cardData.push(card);
      });
      return cardData
    }
  },
  data() {
    return {
      cards: [
        {
          categoryId: 1,
          title: "American",
          content: "jaime les frites",
          price: 9.99,
        },
        {
          categoryId: 2,
          title: "Americain",
          content: "jaime les frites",
          price: 9.99,
        },

      ]
    }
  }

}
</script>

<template>
    <div class="containers">
        <div class="grid-categories">
            <categoriesItem :cards="cardsData"/>
        </div>
    </div>


    <div class="containers">
        <div class="grid-container">
            <RestauItem/>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.grid-container {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    column-count: 4;
}

.grid-categories {
    padding: 1em;
    display: flex;
    justify-content: space-between;

    flex-direction: row;
    column-count: 4;
}
</style>