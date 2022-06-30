<template>
  <div class="container">
    <div class="box">
      <form @submit="submit">
        <span class="text-center">{{name}}</span>
        <div class="input-container">
          <input type="text" required="" name="email" v-model="ProductName"/>
          <label>Nom du produit</label>
        </div>
        <div class="input-container">
          <input type="text" required="" name="price" v-model="ProductPrice"/>
          <label>prix unitaire </label>
        </div>
        <div class="input-container">
          <textarea type="text" required="" name="description" v-model="ProductDesc"/>
          <label>Décrivez votre produit </label>
        </div>

        <div class="importimg">
          <label style="color: #eaeaea" for="inputTag">
            Select Image <br/>
            <i class="fa fa-2x fa-camera" style="color: #eaeaea;margin-left: 35%;cursor: pointer"></i>
            <input class="input-file" id="inputTag" type="file" accept="image/png, image/jpeg">
            <br/>
            <span id="imageName"></span>
          </label>
        </div>
        <div class="bottom-container">
          <button type="submit" class="btn">submit</button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProductView.vue",
  data() {
    return {
      name:"Ajouter un produit",
      ProductName: "TEST",
      ProductPrice: 12,
      ProductDesc: "dfguihojhgfdtfyui",
    }
  },
  mounted: async function(){
    const result = await new RestaurantService().getCategories({}, this.$store, this.$router);
    console.log(result);
    if (result.success){
      this.destination = [new RestaurantCategory({
        _id: "*",
        name: "all",
      })].concat(result.data)
    }else{
      this.destination = []
    }
  }
}
</script>

<style scoped>

.importimg{
  display: flex;
  justify-content: center;
}

.input-file{
  display:none;

}
.container{
  width: 100%;
  background-image: url("../../assets/bgUbereat.jpg");
  background-color: #cccccc;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
body{
  background-image: url("https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  min-height:100vh;
  font-family: 'Noto Sans', sans-serif;
}
.text-center{
  color:#fff;
  text-transform:uppercase;
  font-size: 23px;
  margin: -50px 0 80px 0;
  display: block;
  text-align: center;
}
.box{

  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.89);
  border-radius:30px;
  padding:70px 50px;
}
.input-container{
  position:relative;
  margin-bottom:25px;
}
.input-container label{
  position:absolute;
  top:0px;
  left:0px;
  font-size:16px;
  color:#fff;
  pointer-event:none;
  transition: all 0.5s ease-in-out;
}
.input-container input{
  border:0;
  border-bottom:1px solid #555;
  background:transparent;
  width:100%;
  padding:8px 0 5px 0;
  font-size:16px;
  color:#fff;
}
textarea{
  color: #eaeaea;
  padding:20px 0 10px 0;
  border:none;
  outline:none;
  width: 500px;
}
.input-container input:focus {
  border:none;
  outline:none;
  border-bottom:1px solid #e74c3c;
}
.btn{
  color:#fff;
  background-color:#e74c3c;
  outline: none;
  border: 0;
  color: #fff;
  padding:10px 20px;
  text-transform:uppercase;
  margin-top:50px;
  border-radius:30px;
  cursor:pointer;
  position:relative;
}

.input-container input:focus ~ label,
.input-container input:valid ~ label{
  top:-12px;
  font-size:12px;

}
.bottom-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>