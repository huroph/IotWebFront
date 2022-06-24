<template>

  <div v-for="image in images" :key="image.name" :itemlist="image">

    <img :src="image.url" :alt="image.alt" width="50" height="50" />
    <div style="text-align:center">
      {{ image.name }}
    </div>
  </div>



</template>


<script lang="ts">

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
    data() {
        return {
            images,
        }
    }
};
</script>
