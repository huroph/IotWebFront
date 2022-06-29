<script>
import categoriesItem from "@/components/categoriesItem.vue";
import sourceData from "@/data.json"
import RestauItem from "@/components/molecules/cards/RestauItem.vue";

export default {
  components: {RestauItem, categoriesItem},
  beforeMount() {
    this.restaurants = sourceData['restaurants'];
    this.filteredRestaurants = this.restaurants;
  },
  methods: {
    setCategoryId($event) {
      this.filteredRestaurants = this.restaurants.filter(restau => {
        if ($event.data === '*') return restau;
        else if (restau.categoryId === $event.data) return restau;
      });

    },
  },
  computed: {
    cardsData() {
      const cardData = [];
      this.cards.forEach((card) => {
        if (card.categoryId === this.destinationId) cardData.push(card);
        console.log(cardData)
      });
      return cardData

    }
  },
  data() {
    return {
      restaurants: [],
      filteredRestaurants: []
    }
  }
}
</script>

<template>
  <div class="containers">
    <div class="grid-categories">
      <categoriesItem @categoryId="setCategoryId"/>
    </div>
  </div>


  <div class="containers">
    <div class="nofoundRestau" v-if="filteredRestaurants.length===0">
      <h1>Nous n'avons pas trouvé de restaurant ...</h1>
    </div>
    <div  v-else >
      <h1 class="title">Meilleur resultats </h1>

      <div class="grid-container">

        <RestauItem :restaurants="filteredRestaurants"/>
      </div>
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

.nofoundRestau{
  color: grey;
  text-align:center;
  justify-content:center;
  height: 200px;
  display: flex;
  padding-top: 10%;
}
.title{
  margin: 20px;
}

</style>