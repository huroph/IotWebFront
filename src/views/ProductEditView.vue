<template>
 <div class="container">
   <div class="subContainer">
     <router-link to="/addProduct">
       <div class="addProduct">
         <div class="top">
           <img src="add-icon.svg" alt="Paris" class="center">
         </div>
         <a>Ajouter un produit</a>
       </div>
     </router-link>

     <div class="verticalLine">
     </div>
     <router-link to="/editProduct">
       <div class="editProduct">
         <div class="top">
           <img  src="edit-logo.svg" alt="Paris" class="center">
         </div>
         <div >
           <a >Editer un produit</a>
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

.top{
  height: 80%;
  display: flex;
}
.container{

  width: 100%;
  background-image: url("../assets/bgUbereat.jpg");
  background-color: #cccccc;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.subContainer{
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

a{
  height: 20%;
  font-size: 20px;
  font-family: "Bambou Sans";

}
.addProduct{

  width: 50%;
  text-align: center;
  height: 200px;
  margin: 5px;
  border-radius: 25px;

}


.addProduct:hover{
  background-color: rgba(127, 120, 120, 0.5); ;
  border-radius: 25px;
  cursor: pointer;
}
.editProduct:hover{
  background-color: rgba(127, 120, 120, 0.5); ;
  border-radius: 25px;
  cursor: pointer;
}
.editProduct{

  width: 50%;
  text-align: center;
  height: 200px;
  margin: 5px;
  border-radius: 25px;
}
.center {
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