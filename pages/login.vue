<template>
  <div class="login-box">
    <div class="login-logo">
      <a>Safe<b>TY</b></a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Ingrese sus credeniales</p>
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
              <label> <input type="checkbox" /> Recuerdame </label>
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

      <!-- <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"
          ><i class="fa fa-facebook"></i> Sign in using Facebook</a
        >
        <a href="#" class="btn btn-block btn-social btn-google btn-flat"
          ><i class="fa fa-google-plus"></i> Sign in using Google+</a
        >
      </div> -->
      <!-- /.social-auth-links -->

      <!-- <a>Olvide mi contraseña</a><br /> -->
      <!-- <a href="register.html" class="text-center">Register a new membership</a> -->
    </div>
    <!-- /.login-box-body -->
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  layout: "external",
  components: {},
  data() {
    return {
      login: {
        username: "admin@gmail.com",
        password: "123456",
      },
    };
  },

  methods: {
    async userLogin() {
      try {
        let response = await this.regularLogin(this.login);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
    ...mapActions({
      regularLogin: "usuario/regularLogin",
    }),
  },
  computed: {
    ...mapGetters({
      token: "usuario/getToken",
    }),
  },
  async mounted() {
    //console.clear();
  },
};
</script>

<style>
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
</style>
