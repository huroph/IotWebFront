
<script setup lang="ts">
import RestoItem from '@/components/molecules/cards/RestoItem.vue'
import productItem from "@/components/molecules/cards/productItem.vue";
import categoriesItem from "@/components/categoriesItem.vue";

</script>

<template>
    <div class="containers">
        <div class="grid-categories">
            <categoriesItem />
        </div>
    </div>


    <div class="containers">
        <div class="grid-container">
            <RestoItem />
        </div>
    </div>

</template>

<style lang="scss">
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