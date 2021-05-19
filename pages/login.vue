<template>
  <div class="login-box">
    <div class="login-logo">
      <a><strong>Safety</strong></a>
    </div>
    <Error />
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
    </div>
    <!-- /.login-box-body -->
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
