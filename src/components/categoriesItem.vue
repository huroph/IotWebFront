<template>

  <div  v-for="item in destination" :key="item.name" :itemlist="item">
<div v-on:click="redirect(item.id)">
  <img :src="item.icon"  width="50" height="50" />
  <div style="text-align:center">
    {{ item.category }}
  </div>
</div>

  </div>



</template>


<script  >
import router from "@/router";
import sourceData from "@/data.json"
const images = [
    { url: '/categories/alcohol.png', alt: 'I love you nature', name: 'alcohol' },
    { url: '/categories/american.png', alt: 'I love you nature', name: 'american' },
    { url: '/categories/burger.png', alt: 'I love you nature', name: 'burger' },
    { url: '/categories/convenience.png', alt: 'I love you nature', name: 'convenience' },
    { url: '/categories/deals.png', alt: 'I love you nature', name: 'deals' },
    { url: '/categories/french.png', alt: 'I love you nature', name: 'french' },
    { url: '/categories/halal.png', alt: 'I love you nature', name: 'halal' },
    { url: '/categories/indian.png', alt: 'I love you nature', name: 'indian' },
    { url: '/categories/italian.png', alt: 'I love you nature', name: 'italian' },
    { url: '/categories/japanese.png', alt: 'I love you nature', name: 'japanese' },
    { url: '/categories/pizza.png', alt: 'I love you nature', name: 'pizza' },
    { url: '/categories/sushi.png', alt: 'I love you nature', name: 'sushi' },
    { url: '/categories/thai.png', alt: 'I love you nature', name: 'thai' },

]

export default {
  computed: {
    destination() {
      return sourceData['categories'];
    }
  },
  methods: {
    redirect(categoryId) {
      router.push({name: 'RestauBycategoryId', params: {categoryId: categoryId}});
    }
  },

};
</script>
