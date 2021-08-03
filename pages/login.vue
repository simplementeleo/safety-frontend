<template>
<div class="mainWrapper">
  <div class="login-box bgg-sfbox radius-general" id="loginBox">
    <div class="circle" v-for="i in 3" :key="i"></div>
     
    <div class="login-logo">
      <br/>
      <div><strong>SAFETY</strong></div>
    </div>
    
    <Error />
    <!-- /.login-logo -->
    <div class="login-box-body loginbody">
      <p class="login-box-msg" style="color: #bebdd2; margin-bottom: 30px;"><strong>Ingrese sus credenciales</strong></p>
      <form @submit.prevent="userLogin">
        <div class="form-group has-feedback">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model="login.username"
          />
          <span
            class="glyphicon glyphicon-envelope form-control-feedback"
          ></span>
        </div>
        <div class="form-group has-feedback">
          <input
            type="password"
            class="form-control"
            placeholder="Contraseña"
            v-model="login.password"
          />
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
       <div class="checkbox">
              <label> <input type="checkbox" /> Recuérdame </label>
            </div>
         <button type="submit" class="btn-submit">
              Ingresar
            </button>
      </form>
    </div>
    <!-- /.login-box-body -->
  </div>
</div>
</template>

<script>
import Error from "@/components/alerts/errorAlert";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  layout: "external",
  components: { Error },
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async userLogin() {
      await this.regularLogin(this.login);
    },
    ...mapActions({
      regularLogin: "usuario/regularLogin",
    }),
  },
  computed: {
    ...mapGetters({
      token: "usuario/getToken",
      error: "api/getError",
    }),
  },
};
</script>

<style>
.mainWrapper {
  background-color: #010030;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

}
.login-box {
  position: relative;
}
@keyframes showShadow {
  to { box-shadow: -3px 3px 15px #1c6cf826; }
}
.circle {
  position: absolute;
  border-radius: 0 0 0 300px;
  top: -10px;
  right: -10px;
  box-shadow: none;
  animation: 1s showShadow ease-in-out forwards;
}
.circle:nth-child(1) {
  width: 100px;
  height: 100px;
  background: white;
  z-index: 3;
  animation-delay: 1s;
}
.circle:nth-child(2) {
  width: 130px;
  height: 130px;
  background: white;
  z-index: 2;
  animation-delay: 2s;
}
.circle:nth-child(3) {
  width: 160px;
  height: 160px;
  background: white;
  z-index: 1;
  animation-delay: 3s;
}



.checkbox {
  color: #eee;
  margin-top: 20px;
}
.btn-submit {
  border: none;
  outline: none;
  border-radius: 50px;
  background: linear-gradient(45deg, #0C75F4, #54A7EC);
  color: white;
  width: 100%;
  margin: 12px 0;
  transition: all .2s ease-in-out;
  box-shadow: 0px 13px 0px -8px #e1e2e3;
  padding: 7px;
}
.btn-submit:active, .btn-submit:focus {
  outline: none;
}
.btn-submit:hover {
  transform: translateY(3px);
  box-shadow: none;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.form-group {
  color: #eee;
}
.form-control {
  background: transparent;
  color: #eee;
  border: none;
  border-bottom: 1px solid #54A7EC;
}
input::placeholder {
  color: #eeeeeee3;
}

.links {
  padding-top: 15px;
}
.bgg-sfbox {
  background-color: #2B2B4B;
  max-width: 380px;
  padding: 20px 15px;
}

.loginbody {
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
  
.login-logo{
  color: white;
  font-size: 3rem;
  letter-spacing: 6px;
  font-family: 'Ubuntu', sans-serif;
  margin-top: 40px;
  
  
}

#loginBox {
 animation: 0.6s linear 0s 1 transformLogin;
}

 @keyframes transformLogin {
    0% {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
