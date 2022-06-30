<template>
 <div class="containerb">
   <div class="subContainerb">
     <router-link to="/addProduct">
       <div class="addProductb">
         <div class="topb">
           <img src="/add-icon.svg" alt="Paris" class="centerb">
         </div>
         <h1 class="bibo">Ajouter un produit</h1>
       </div>
     </router-link>

     <div class="verticalLine">
     </div>
     <router-link to="/editProduct">
       <div class="editProductb">
         <div class="topb">
           <img  src="/edit-logo.svg" alt="Paris" class="centerb">
         </div>
         <div >
           <h1 class="bibo">Editer un produit</h1>
         </div>
       </div>
     </router-link>
   </div>


 </div>
</template>

<script>
export default {
  name: "ProductEditView.vue"
}
</script>

<style scoped>

.topb{
  height: 80%;
  display: flex;
}
router-link ::v-deep{
  text-decoration: none;
}
.containerb{

  width: 100%;
  background-image: url("../assets/bgUbereat.jpg");
  background-color: #cccccc;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.subContainerb{
background-color: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top:10%;
  margin-left:8%;
  width: 500px;
  height: 300px;

}

.bibo{
  height: 20%;
  font-size: 20px;
  font-family: "Bambou Sans";
  text-decoration: none;


}
.addProductb{

  width: 50%;
  text-align: center;
  height: 200px;
  margin: 5px;
  border-radius: 25px;

}


.addProductb:hover{
  background-color: rgba(127, 120, 120, 0.5); ;
  border-radius: 25px;
  cursor: pointer;
}
.editProductb:hover{
  background-color: rgba(127, 120, 120, 0.5); ;
  border-radius: 25px;
  cursor: pointer;
}
.editProductb{

  width: 50%;
  text-align: center;
  height: 200px;
  margin: 5px;
  border-radius: 25px;
}
.centerb {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;

}
.verticalLine {
  border-left: thick solid #000000;
  width: 1px;
  height: 200px;
  border-radius: 5px;
}

</style>