
<template>

  <img class="bg" src="../assets/bgUbereat.jpg"   alt="">
    <div class="title">
      <h1>Vos Plats préférés,directement à votre porte</h1>
      <div class="container">
        <div class="row">
          <input  type="text" id="name" name="name" placeholder="Saisissez l’adresse de livraison">
          <router-link to="/restaurants"><button class="btnFindRestaurant">
            <a class="textBtn">Trouver un restaurant</a>
          </button>
          </router-link>
        </div>
      </div>
    </div>


</template>

<script setup>

</script>


<style scoped>
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) { /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px;   /* 50% */
  }
}
.row {
  display: grid;
  margin: 50px !important;
  grid-template-rows: auto auto;
  gap: 100px;
}


.homepage {
  overflow: hidden;
  position: fixed;
  width: 100%;
  background-image: url("../assets/bgUbereat.jpg");
  background-color: #cccccc;
  height: 89vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

}



/* Saisissez l’adresse de livraison */

input[type=text] {
  position: absolute;
  width: 313px;
  height: 50px;
  border:solid 1px grey ;
  border-radius: 27px !important;
  align-items: center;
  text-align: center;
}

.title {
  top: 30%;
  left: 1%;
  width: 1000px;
  height: auto;
  position: absolute;
}

h1 {
  font-size: 70px;
  font-family: "Bambou Sans";
  color: #ffffff;
}

/* Btn Find Restaurant */
.btnFindRestaurant {
  cursor: pointer;
  position: absolute;
  width: 177px;
  height: 50px;
  left: 404px;

  background: #000000;
  border-radius: 27px;


}


/* Trouver un restaurant */
.textBtn {
  text-decoration: none;
  font-family: "Bambou Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;

  align-items: center;
  text-align: center;
  color: #FFFFFF;


}
</style>