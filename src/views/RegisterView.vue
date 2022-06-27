<template>
  <div class="container">
    <div class="box">
      <form @submit="register">
        <span class="text-center">INSCRIPTION</span>
        <div class="row">
          <div class="input-container">
            <input type="text" v-model="lastName"/>
            <label>Nom de famille</label>
          </div>
          <div class="input-container" style="margin-left: 5px">
            <input type="text" v-model="firstName"/>
            <label>Prénom</label>
          </div>
        </div>

        <div class="input-container">
          <input type="email" v-model="email"/>
          <label>Email</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="phone"/>
          <label>Téléphone</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="address"/>
          <label>Adresse</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="password"/>
          <label>Mot de passe</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="confirmPassword"/>
          <label>Confirmez Mot de passe</label>
        </div>
        <div class="input-container">
          <input type="text" v-model="refereeCode"/>
          <label>Code parrainage</label>
        </div>
        <div class="bottom-container">
          <button type="submit" class="btn">submit</button>
          <router-link style="text-decoration: none; color: inherit;" to="/login">
            <p style="color: white"> Vous avez deja un compte ?</p>
          </router-link>

        </div>

      </form>
    </div>
  </div>


</template>

<script>
import {RegisterService} from "../services/registerService";

export default {
  data: () => ({
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    firstName: 'test',
    lastName: 'test',
    password: 'dddd',
    confirmPassword: 'dddd',
    refereeCode: '',
    phone: '34567890987654',
    email: 'ggggg@ggg.com',
    address: 'ggggg',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async register(e) {
      e.preventDefault();
      if (this.password === this.confirmPassword) {
        const result = new RegisterService().registerUser({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          phone: this.phone,
          refereeCode: this.refereeCode,
          address: this.address,
        }, this.$store, this.$router);
        result.then(async response => {
          console.log(response);
          this.$swal({
            icon: response.success ? "success" : "error",
            text: response.data
          });
          if (response.success){
            await this.$router.push("/login")
          }
        });
      } else {
        this.$swal({
          title: "Erreur",
          text: "Les mots de passe ne correspondent pas",
          icon: "error"
        })
      }
    }
  },
}
</script>

<style scoped>
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
.row{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 10px;
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