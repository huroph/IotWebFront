<template>
  <v-list nav dense >
    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4" >
      <v-list-item >
        <v-list-item-title>
          VOTRE PANIER
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-img class="img" src="./src/assets/products/burger.png" >
        </v-img>
        <v-list-item-title>
          menue 280
        </v-list-item-title>
        <v-spacer></v-spacer>
        x 1
      </v-list-item>
      <v-list-item>
        <v-img class="img" src="./src/assets/products/burger.png" >
        </v-img>
        <v-list-item-title>
          menue 280
        </v-list-item-title>
        <v-spacer></v-spacer>
        x 1
      </v-list-item>
      <v-list-item>
        <v-img class="img" src="./src/assets/products/burger.png" >
        </v-img>
        <v-list-item-title>
          menue 280
        </v-list-item-title>
        <v-spacer></v-spacer>
        x 1
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "CartItems.vue"
}
</script>

<style scoped>

</style>