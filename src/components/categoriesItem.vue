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
    { url: './src/assets/categories/alcohol.png', alt: 'I love you nature', name: 'alcohol' },
    { url: './src/assets/categories/american.png', alt: 'I love you nature', name: 'american' },
    { url: './src/assets/categories/burger.png', alt: 'I love you nature', name: 'burger' },
    { url: './src/assets/categories/convenience.png', alt: 'I love you nature', name: 'convenience' },
    { url: './src/assets/categories/deals.png', alt: 'I love you nature', name: 'deals' },
    { url: './src/assets/categories/french.png', alt: 'I love you nature', name: 'french' },
    { url: './src/assets/categories/halal.png', alt: 'I love you nature', name: 'halal' },
    { url: './src/assets/categories/indian.png', alt: 'I love you nature', name: 'indian' },
    { url: './src/assets/categories/italian.png', alt: 'I love you nature', name: 'italian' },
    { url: './src/assets/categories/japanese.png', alt: 'I love you nature', name: 'japanese' },
    { url: './src/assets/categories/pizza.png', alt: 'I love you nature', name: 'pizza' },
    { url: './src/assets/categories/sushi.png', alt: 'I love you nature', name: 'sushi' },
    { url: './src/assets/categories/thai.png', alt: 'I love you nature', name: 'thai' },

]

export default {
    data() {
        return {
            images,
        }
    }
};
</script>
