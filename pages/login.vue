<template>
<div class="mainWrapper">
  <div class="login-box bgg-sfbox" id="loginBox">
     
    <div class="login-logo">
      <br/>
      <div><strong>SAFETY</strong></div>
    </div>
    
    <Error />
    <!-- /.login-logo -->
    <div class="login-box-body loginbody">
      <p class="login-box-msg" style="color:black"><strong>Ingrese sus credenciales</strong></p>
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
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox">
              <label> <input type="checkbox" /> Recuérdame </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">
              Ingresar
            </button>
          </div>
          <!-- /.col -->
        </div>
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
  position:fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
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

.links {
  padding-top: 15px;
}
.bgg-sfbox {
  background-color: #2B2B4B;
  border-radius: 5px;
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
