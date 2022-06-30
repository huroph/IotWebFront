<template>


  <div class="container">
    <h2>Vos Commandes</h2>
    <ul class="responsive-table">
      <li class="table-header">
        <div class="col col-1">Numero de commande</div>
        <div class="col col-2">Nom</div>
        <div class="col col-3">date</div>
        <div class="col col-4">Prix</div>
        <div class="col col-5"></div>
      </li>
      <li class="table-row"  v-for="item in orders"
          :key="item.name">
        <div class="col col-1" data-label="Job Id">{{ item.idOrder }}</div>
        <div class="col col-2" data-label="Customer Name">{{ item.name }}</div>
        <div class="col col-3" data-label="Amount">{{ item.date }}</div>
        <div class="col col-4" data-label="Payment Status">{{ item.price }}€</div>
        <div class="col col-5" data-label="Payment Status"><router-link :to="`/order/${item.idOrder}`">Voir le detail</router-link></div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "OrderDetailView.vue",
  data() {
    return {
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
      ]
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