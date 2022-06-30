<template>

    <img class="bg" src="/background-resto 1.png"   alt="">

    <div class="box">
      <div style="width: 70%!important;">
      </div>
      <form @submit="createDeliverer">
        <span class="text-center">Lancez-vous en tant que livrer</span>
        <div class="bottom-container">
          <button type="submit" class="btn">Oui !</button>
        </div>


      </form>
    </div>



</template>

<script lang="ts">
import {RestaurantService} from "../../services/restaurant.service";
import {DelivererService} from "@/services/deliverer.service";

export default {
  data: () => ({
  }),
  mounted: async function() {
  },
  methods: {
    async createDeliverer(e) {
      e.preventDefault();
          const response = await new DelivererService().createDeliverer({}, this.$store, this.$router);
          this.$swal({
            icon: response.success ? "success" : "error",
            text: response.data
          });
          if (response.success){
            await this.$router.push("/")
          }
        }

  },
}
</script>

<style scoped>
.v-field__field, .v-field__prepend-inner, .v-field__append-inner, .v-field__clearable{

}
.v-select::v-deep{
  color: #FFFFFF!important;
}
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
.container{
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 120%;
  min-height: 120%;

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