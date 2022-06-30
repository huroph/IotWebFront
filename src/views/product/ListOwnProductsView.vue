<template>


  <div class="container">
    <h2>Les retaurants</h2>
    <v-btn @click="acceptPending" variant="outlined">Accept restaurant</v-btn>
    <EasyDataTable
        v-model:items-selected="itemsSelected"
        :headers="headers"
        :items="restaurants"
    >
      <template #item-img="img">
        <div class="player-wrapper">
          <img style="width: 50px; height: 50px" :src="img.img" alt="" />
        </div>
      </template>
    </EasyDataTable>
  </div>

</template>

<script lang="ts">

import { Restaurant } from "@/models/restaurant.model";
import {RestaurantService} from "@/services/restaurant.service";
import { ref } from "vue";
import type { clickRowArgument } from "vue3-easy-data-table";

export default {
  name: "OrderDetailView.vue",
  data: function (){
    return {
      restaurants: [],
      excludedKey: ["img", "__v"],
      selected: [],
      headers: new Restaurant({_id:""}).headers(),
      singleSelect: false,
      itemsSelected: ref([])
    }
  },
  methods: {
    async acceptPending() {
      if (this.itemsSelected.length == 1) {
        if (this.itemsSelected[0].status == "pending"){
          const r = await new RestaurantService().acceptPendingRestaurant({
            userId: this.itemsSelected[0].userId,
            roleName: "restau"
          }, this.$store, this.$router);
          this.$swal({
            icon: r.success ? "success" : "error",
            text: r.data
          });
          if(r.success){
            const result = await new RestaurantService().get({request: 'getAll'}, this.$store, this.$router);
            if (result.success){
              this.restaurants = result.data

            }else{
              this.restaurants = []
            }
          }
        }else{
          this.$swal({
            title: "Erreur",
            text: "Ce restaurant n'est pas en attente",
            icon: "error"
          })
        }
      }else{
        this.$swal({
          title: "Erreur",
          icon:"error",
          text: "Veuillez selectionner un restaurant"
        })
      }
    },
  },
  mounted: async function loadData(){
    const result = await new RestaurantService().get({request: 'getAll'}, this.$store, this.$router);
    if (result.success){
      this.restaurants = result.data

    }else{
      this.restaurants = []
    }
  }
}

</script>

<style scoped lang="scss">
.container {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
}

h2 {
  font-size: 26px;
  margin: 20px 0;
  text-align: center;
small {
  font-size: 0.5em;
}
}

.responsive-table {
li {
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}
.table-header {
  background-color: #95A5A6;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.table-row {
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
}
.col-1 {
  flex-basis: 30%;
}
.col-2 {
  flex-basis: 20%;
}
.col-3 {
  flex-basis: 40%;
}
.col-4 {
  flex-basis: 10%;
}
  .avator{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

@media all and (max-width: 767px) {
  .table-header {
    display: none;
  }
  .table-row{

  }
  li {
    display: block;
  }
  .col {

    flex-basis: 100%;

  }
  .col {
    display: flex;
    padding: 10px 0;
&:before {
   color: #6C7A89;
   padding-right: 10px;
   content: attr(data-label);
   flex-basis: 50%;
   text-align: right;
 }
}
}
}

</style>