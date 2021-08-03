<template>
  <div>
    <section class="welcomeScreen" id="welcomescreen">
      <div class="safetyLogo"><strong>SAFETY</strong></div>
    </section>
    <div class="wrapper">
      <header class="headerStyle">

        <div class="safetyLogo">
          <strong>SAFETY</strong>
        </div>

        <div class="col-md-8"><input class="form-control col-md-8 sfSearchbar" type="search" placeholder="Buscar"
            aria-label="Buscar"></div>

        <nav class="navbar">
          <button @click="logout()" class="logoutLink sign-out" data-tippy-content="Cerrar Sesión" >
            <img class="logoutLink" src="@/assets/icons/logout.png" alt="Salir" width="50px" />
          </button>
        </nav>
      </header>

      <div class="content-wrapper" style="background-color: #010030">
        <!-- Main content -->
        <section class="content mt-5" style="background-color: #010030">
          <Nuxt />
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer" style="background-color: #2B2B4B; color: white; border: none">
        <div class="pull-right hidden-xs"><strong>Versión</strong> 1.5</div>
        <strong>Copyright &copy; 2021 <a href="#">Safety</a>.</strong> Todos los
        derechos reservados.
      </footer>

      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->

      <!--  
      <div class="control-sidebar-bg"></div>
      -->
    </div>
    <!-- ./wrapper -->
  </div>
</template>
<script>
  export default {
    middleware: ["authenticated"],
    components: {},
    head() {
      return {
        meta: [{
          content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
          name: "viewport",
        }, ],
      };
    },
    data() {
      return {};
    },
    computed: {},
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push("/login");
      },
    },
    async mounted() {
      var body = document.getElementsByTagName("body")[0];

      body.classList.add("sidebar-collapse");
      /*
      body.classList.add("skin-yellow"); 
      body.classList.add("sidebar-mini");
      
      */
      body.classList.add("hold-transition");

      $.widget.bridge("uibutton", $.ui.button);

      setTimeout(function () {
        document.getElementById("welcomescreen").style.display = 'none';
      }, 2000);

      tippy('[data-tippy-content]',{
        theme: 'safety'
      })
    },
  };

</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

  * {
    font-family: 'Ubuntu', sans-serif;
  }

  .logoutLink:hover {
    text-decoration: none;
  }

  nav {
    display: flex;
    align-items: center;
    height: 100%;
    margin-bottom: 0;
  }

  .welcomeScreen {
    width: 100vw;
    height: 100vh;
    z-index: 50;
    background-color: #010030;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    animation: 2s ease-in-out 0s 1 fadeAway;
  }

  .sign-out {
    cursor: pointer; 
    background-color: #F37DB8; 
    border-radius: 50%;
    border: none;
  }

  /* Screen Animation*/
  @keyframes fadeAway {
    0% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }
  header {
    padding: 0;
    z-index: 20;
    box-shadow: 0 10px 10px #06080c36;
    position: absolute;
    width: 100%;
    background: #2b2b4b;
  }
  .radius-general {
    border-radius: 7px;
  }

  .headerStyle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
  }

  .main-footer {
    padding: 10px 15px;
  }

  .safetyLogo {
    color: white;
    font-size: 3rem;
    letter-spacing: 6px;
    font-family: 'Ubuntu', sans-serif;

  }

  .sfSearchbar {
    background-color: #010030;
    border: none;
    border-radius: 5px;
    color: white;

  }

  ::placeholder {
    color: #2B2B4B;
    ;
    opacity: 1;
    /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #2B2B4B;
    ;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #2B2B4B;
    ;
  }

  .tippy-box[data-theme~='safety'] {
  background-color: #eee;
  color: #2B2B4B;
}
.tippy-box[data-theme~='safety'][data-placement^='top'] > .tippy-arrow::before {
  border-top-color: #eee;
}
.tippy-box[data-theme~='safety'][data-placement^='bottom'] > .tippy-arrow::before {
  border-bottom-color: #eee;
}
.tippy-box[data-theme~='safety'][data-placement^='left'] > .tippy-arrow::before {
  border-left-color: #eee;
}
.tippy-box[data-theme~='safety'][data-placement^='right'] > .tippy-arrow::before {
  border-right-color: #eee;
}

</style>
