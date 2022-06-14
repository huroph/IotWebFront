<template>
  <div class="container">

    <div class="box">
      <form>
        <span class="text-center">Lancez-vous</span>
        <div class="input-container">
          <input type="text" required=""/>
          <label>Nom de l'établissement</label>
        </div>
        <div class="input-container">
          <input type="text" required=""/>
          <label>Addresse</label>
        </div>
        <div class="container-row">
          <div class="input-container" style="width: 150px!important">
            <input type="text" required=""/>
            <label>Nom de famille </label>
          </div>
          <div class="input-container" style="width: 150px!important;padding-left: 5px">
            <input type="text" required=""/>
            <label>Prénom </label>
          </div>
        </div>
        <div class="input-container" >
          <input type="text" required=""/>
          <label>Prénom </label>
        </div>
        <div class="input-container" >
          <input type="text" required=""/>
          <label>Email </label>
        </div>
        <div class="input-container" >
          <input type="text" required=""/>
          <label>Téléphone </label>
        </div>
        <div class="input-container" >
          <input type="text" required=""/>
          <label>SIRET </label>
        </div>
        <button type="button" class="btn">submit</button>

      </form>
    </div>
  </div>


</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
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
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');

.container{
  width: 100%;
  background-image: url("../assets/background-resto 1.png");
  background-color: #cccccc;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.container-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

body{

  background-position: center;
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  min-height:100vh;
  font-family: 'bambou-sans', sans-serif;
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
  right:0%;
  position:absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius:0px 0px 0px 0px;
  padding:70px 50px;
}


.input-container{
  position:relative;
  margin-bottom:25px;
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
  left: 35%;
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