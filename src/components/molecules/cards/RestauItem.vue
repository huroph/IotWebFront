<template>
  <div class="wrapper" v-for="item in restaurants" :key="item.name" :itemlist="item">
    <div class="container" v-on:click="redirect(item._id)">
      <v-img max-height="150"
             width="2000"
             :src="item.img">
      </v-img>
      <div class="bottom">
          <h1>{{ item.name }}  <v-badge
              color="info"
              :content="item.restaurantCategory.name"
              floating
          ></v-badge></h1>
        <div class="row">
          <div class="left" style="margin-top: 1px;margin-right: 2px ">
            <v-img max-height="10"
                   width="20"
                   src="./icon_delevry.png">
            </v-img>
          </div>
          <p>{{ item.deliveryCharges }}€ frais de livraison</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

export default {
  props: ['restaurants'],
  methods: {
    redirect(restauId) {
      this.$router.push({name: 'menuByRestauId', params: {restauId: restauId}});
    }
  }
};
</script>

<style lang="scss" scoped>

::v-deep .v-responsive {
  max-width: 100% !important;
  max-height: 100% !important;
}

.wrapper {
  cursor: pointer;
  max-width: 300px;
  height: 100%;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .row{
    flex-direction: row;
    display: flex;
  }

  .txtTimeToTelivery {
    color: grey !important;
    font-size: small;
  }

  .container {
    width: 100%;
    height: 100%;

    .bottom {
      margin: 10px;
      margin-left: 10px;
      width: 100%;
      height: 20%;
      transition: transform 0.5s;

      &.clicked {
        transform: translateX(-50%);
      }

      h1 {
        margin-left: 5px;
        padding: 0;
        font-size: 20px;
        color: black
      }

      p {
        max-width: 200px;
        padding: 0;
        color: black
      }

      .left {
        background: #ffffff;
        position: relative;
        float: left;
      }

      .right {
        float: right;
        position: relative;

      }
    }
  }
}
</style>