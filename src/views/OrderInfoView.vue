<template>

  <div class="container">
    <img src="/biker.gif" alt="Paris" class="center">
    <h1 class="title">
      Votre commande est bientot prête !
    </h1>

    <div class="slider-container">
      <slider :status="status"/>
      <h1 class="timetodelivery">Livraison estimée dans {{ Math.floor(Math.random() * 20) }}min </h1>
    </div>
    <div class="slider-container">
      <h2>Details de votre commande <i>{{orderId}}</i> :</h2>
      <ul class="responsive-table">
        <li class="table-header">
          <div class="col col-1">Nom</div>
          <div class="col col-2">Prix unitaire</div>
          <div class="col col-3">Quantité</div>
          <div class="col col-4">Prix total</div>
        </li>
        <li class="table-row"  v-for="item in orders"
            :key="item.name">
          <div class="col col-1" data-label="Job Id">{{ item.idOrder }}</div>
          <div class="col col-2" data-label="Customer Name">{{ item.name }}</div>
          <div class="col col-3" data-label="Amount">{{ item.date }}</div>
          <div class="col col-4" data-label="Payment Status">{{ item.price }}€</div>
        </li>
      </ul>
    </div>

  </div>


</template>

<script lang="ts">
import slider from "../components/molecules/slider.vue";
import {OrderService} from "@/services/order.service";
export default {
  name: "OrderInfoView",
  components: {
    slider
  },
  data: function (){
    return {
      orderId: this.$route.params.orderId,
      status: 0,
      orders: [
        {
          idOrder:0,
          name:'280',
          date:'02/02/2022',
          price:25
        },
        {
          idOrder:1,
          name:'BigMac',
          date:'02/02/2022',
          price:23
        },
        {
          idOrder:1,
          name:'BigMac',
          date:'02/02/2022',
          price:23
        },
        {
          idOrder:1,
          name:'BigMac',
          date:'02/02/2022',
          price:23
        },
        {
          idOrder:1,
          name:'BigMac',
          date:'02/02/2022',
          price:23
        },
        {
          idOrder:1,
          name:'BigMac',
          date:'02/02/2022',
          price:23
        },
      ]}
  },
  methods: {

  },
  mounted: async function loadData(){
    const result = await new OrderService().get({request: 'getOne'}, this.$store, this.$router);
    if (result.success){
      this.orders = result.data

    }else{
      this.order = []
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  max-width:100%;
  height: 100%;
  background-color: #fcedec ;
}
.slider-container{
  max-width:80% ;
  margin-left: 10%;
}
.title{
  font-size: 72px;
  text-align: center;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.timetodelivery{
  font-size: 50px;
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

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }
    .table-row {

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
  }}
</style>