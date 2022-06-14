<template>
<!--      <v-card class="mx-auto"
              max-width="344"
              variant="outlined">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
          <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
          ></v-text-field>

          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>

          <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="Item"
              required
          ></v-select>

          <v-checkbox
              v-model="checkbox"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="Do you agree?"
              required
          ></v-checkbox>

          <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
          >
            Validate
          </v-btn>

          <v-btn
              color="error"
              class="mr-4"
              @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
              color="warning"
              @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
      </v-card>-->
  <div class="container">
    <div class="box">
      <form>
        <span class="text-center">login</span>
        <div style="display:flex;flex-direction: row">
          <div class="input-container">
            <input type="text" required=""/>
            <label>Last Name</label>
          </div>
          <div class="input-container">
            <input type="text" required=""/>
            <label>First Name</label>
          </div>
        </div>

        <div class="input-container">
          <input type="mail" required=""/>
          <label>Email</label>
        </div>
        <div class="input-container">
          <input type="phone" required=""/>
          <label>Téléphone</label>
        </div>
        <div class="input-container">
          <input type="password" id="password" (change)="onPasswordChange()"
          required  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
          <label>Mot de passe</label>
        </div>
        <div class="input-container">
          <input type="password" id="txtConfirmPassword" (change)="onPasswordChange()" required/>
          <label>Confirmez Mot de passe</label>
        </div>
        <button type="button" class="btn">submit</button>
      </form>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent} from "vue";


export default defineComponent({
  name: 'App',
  data () {
    return {

              // All is this method
              onPasswordChange() {
            const Password = document.getElementById('password') as HTMLInputElement | null;
            const ConfirmPassword = document.getElementById('txtConfirmPassword') as HTMLInputElement | null;
            if (Password != ConfirmPassword) {

          console.log("error");
        }
      },

// getting the form control elements

    }
  },
})

</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

.container{


  width: 100%;
  background-image: url("../assets/bgUbereat.jpg");
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
  padding:70px 70px;
}
.input-container{

  position:relative;
  margin-bottom:25px;
  margin-right: 5px;
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
  position:relative;
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