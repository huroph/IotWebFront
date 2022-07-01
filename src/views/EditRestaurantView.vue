<template>
  <img class="bg" src="../assets/background-resto 1.png"   alt="">

  <div class="box">
    <div style="width: 70%!important;">
    </div>
      <form @submit="createRestaurant">
        <span class="text-center">Modifier Les informations de votre restaurant</span>
        <div class="input-container">
          <input type="text" v-model="name"/>
          <label>Nom de l'établissement</label>
        </div>
        <div class="input-container">
          <v-textarea v-model="desc"/>
          <label>Description</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="address"/>
          <label>Addresse</label>
        </div>
        <div class="input-container" >
          <input type="text" v-model="phone"/>
          <label>Téléphone </label>
        </div>
        <div class="input-container" >
          <v-file-input accept="image/jpeg" v-model="img" outlined/>
          <label>IMG </label>
        </div>
        <div class="input-container" >
          <input type="text" v-model="delivery_fee"/>
          <label>Frais de livraison </label>
        </div>
        <div class="input-container" >
          <v-select v-model="select"
                    :hint="`${select.key}, ${select.value}`"
                    :items="categories"
                    item-title="key"
                    item-value="value"
                    label="Select"
                    persistent-hint
                    return-object

                    single-line></v-select>
          <label>Categorie</label>
        </div>
        <div class="input-container" >
          <input type="text" v-model="siret"/>
          <label>SIRET </label>
        </div>
        <div class="bottom-container">
          <button type="submit" class="btn" :disabled="disabled">submit</button>
        </div>
      </form>
    </div>

</template>

<script lang="ts">
import {RestaurantService} from "../services/restaurant.service";
import {RestaurantCategory} from "@/models/restaurantCategory.model";

export default {
  data: () => ({
    delivery_fee: 2,
    siret: '12345678901234',
    name: 'test',
    desc: 'Coucours de cuisine',
    phone: '+33612345678',
    address: '1234 rue de la gare',
    select: {key:"american", value:"62bac5e442b79dc9de920283"},
    categories:[
      {key:"american", value:"62bac5e442b79dc9de920283"},
      {key:"italian", value:"italian"},
      {key:"french", value:"french"},
      {key:"japanese", value:"japanese"},
      {key:"chinese", value:"chinese"},
      {key:"thai", value:"thai"},
      {key:"burger", value:"burger"},
      {key:"halal", value:"burger"},
      {key:"pizza", value:"burger"},
      {key:"sushi", value:"burger"},
    ],
    disabled: false,
  }),
  mounted: async function(){
    // get categories
    let result = await new RestaurantService().getCategories({}, this.$store, this.$router);
    console.log(result);
    if (result.success){
      this.categories = result.data.map(item => {
        return {
          key: item.name,
          value: item._id,
        }
      })
    }else{
      this.categories = []
    }
    // get client restaurant infos
    result = await new RestaurantService().get({request: "getHis"}, this.$store, this.$router);
    console.log(result);
    if (result.success){
      this.delivery_fee = 2
      this.siret = result.data.siret
      this.name = result.data.name
      this.desc = result.data.desc
      this.phone = result.data.phone
      this.address = result.data.address
      this.select = {key: result.data.restaurantCategory.name, value:result.data.restaurantCategory._id}
    }
  },
  methods: {
    async createRestaurant(e) {
      e.preventDefault();
      const th = this;
      if (this.img){
        let payload = {
          name: this.name,
          desc: this.desc,
          address: this.address,
          phone: this.phone,
          deliveryCharges: this.delivery_fee,
          restaurantCategoryId: this.select.value,
          siret: this.siret,
        };
        var reader = new FileReader();
        // Use the javascript reader object to load the contents
        // of the file in the v-model prop
        reader.readAsDataURL(this.img[0])
        reader.onload = async function () {
          payload["img"] = reader.result;
          const response = await new RestaurantService().editRestaurant(payload, th.$store, th.$router);
          th.$swal({
            icon: response.success ? "success" : "error",
            text: response.data
          });
          if (response.success){
            await th.$router.push("/")
          }
        }
      }else {
        this.$swal({
          title: 'Erreur',
          text: 'Veuillez choisir une image',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }

    },
  },
}
</script>

<style scoped>


.v-select__selection-text span::v-deep{
  color: #FFFFFF!important;
}
.v-file-input ::v-deep{
  color:#FFFFFF;
}
label{
  margin-top: -20px;
  font-weight: bold ;

}
.v-textarea ::v-deep {
  color:#FFFFFF!important;
}
.bottom-container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;

  margin-top: 20px;
}

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


.text-center{

  color:#fff ;
  text-transform:uppercase;
  font-size: 23px;
  margin: -50px 0 30px 0;
  display: block;
  text-align: center;
}
.box{
  width: 100%;
  display: flex;
  position:absolute;
  flex-direction: row;

  border-radius:0px 0px 0px 0px;

}

form{
  padding:70px 50px;
  background-color: rgba(0, 0, 0, 0.8);
}
.input-container{

  position:relative;
  margin:50px 0 0px 0;

  width: 300px;
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
.input-container input:focus{
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
  position:absolute;

}
/*.btn:after{
	content:"";
	position:absolute;
	background:rgba(0,0,0,0.50);
	top:0;
	right:0;
	width:100%;
	height:100%;
}*/
.input-container input:focus ~ label,
.input-container input:valid ~ label{
  top:-12px;
  font-size:12px;

}

</style>