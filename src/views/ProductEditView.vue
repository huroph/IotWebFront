<template>
 <div class="container">
   <div class="subContainer">
     <div class="addProduct">
       <div class="top">
         <img src="add-icon.svg" alt="Paris" class="center">
       </div>
       <div>
         <a>Ajouter un produit</a>
       </div>
     </div>
     <div class="verticalLine">
     </div>
     <div class="editProduct">
       <div class="top">
         <img style="margin-top: -20px" src="edit-logo.svg" alt="Paris" class="center">
       </div>
      <div style="margin-top: 20px">
        <a >Editer un produit</a>
      </div>
     </div>
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
  border: solid 1px red;
  width: 50%;
  text-align: center;
  height: 200px;
  margin: 5px;
  border-radius: 25px;
}
.editProduct{
  width: 50%;
  text-align: center;

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