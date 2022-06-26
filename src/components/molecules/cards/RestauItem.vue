<template>

  <div class="wrapper" v-for="item in destination" :key="item.name" :itemlist="item">
    <div class="container" v-on:click="redirect(item.id)">
      <v-img max-height="150"
             width="2000"
             :src=item.background>
        </v-img>
      <div class="bottom">

          <div class="details">
            <img src="./icon_delevry.png"
                  />
            <h1>{{ item.name }}</h1>
            <p>{{ item.delivery_charges }} frais de livraison</p>
          </div>



      </div>
    </div>
  </div>



</template>
<script>
 import router from "@/router";
 import sourceData from "@/data.json"

export default {
   computed: {
     destination(){
       return sourceData['restaurants'];
     }
   },
  methods: {
    redirect(restauId) {
      router.push({name: 'menuByRestauId', params: {restauId:restauId}});
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
  height: 320px;
  background: white;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;

  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }

  .container {
    width: 100%;
    height: 100%;

    .bottom {
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
        top: -5px;
        margin-left: 20px;
        padding: 0;
        color: black
      }

      .left {
        height: 100%;
        width: 50%;
        background: #ffffff;
        position: relative;
        float: left;

        .details {

          float: left;
          width: calc(70% - 40px);
        }

        .buy {
          float: right;
          width: calc(30% - 2px);
          height: 100%;
          background: #f1f1f1;
          transition: background 0.5s;
          border-left: solid thin rgba(0, 0, 0, 0.1);

          i {
            font-size: 30px;

            color: #254053;
            transition: transform 0.5s;
          }

          &:hover {
            background: #A6CDDE;
          }

          &:hover i {
            transform: translateY(5px);
            color: #00394B;
          }
        }
      }

      .right {
        width: 50%;
        background: #A6CDDE;
        color: white;
        float: right;
        height: 200%;
        overflow: hidden;

        .details {

          float: right;
          width: calc(70% - 40px);
        }

        .done {
          width: calc(30% - 2px);
          float: left;
          transition: transform 0.5s;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;

          i {
            font-size: 30px;

            color: white;
          }
        }

        .remove {
          width: calc(30% - 1px);
          clear: both;
          border-right: solid thin rgba(255, 255, 255, 0.3);
          height: 50%;
          background: #BC3B59;
          transition: transform 0.5s, background 0.5s;


          i {
            transition: transform 0.5s;
            font-size: 30px;
            color: white;
          }
        }

      }
    }
  }
}
</style>