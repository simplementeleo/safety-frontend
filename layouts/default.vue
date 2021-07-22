<template>
  <div>
    <div class="wrapper">
      <header class="headerStyle">
        <div class="safetyLogo" style="margin-top: -5px;">
          <strong>SAFETY</strong>
        </div>
        <div class="col-md-8"><input class="form-control col-md-8 sfSearchbar" type="search" placeholder="Buscar" aria-label="Buscar"></div>
        
        <!-- Logo -->
        <!-- 
        <a href="/" class="logo">
          
          <span class="logo-mini">S<strong>T</strong></span>
          
          
        </a>
        -->
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
          <!-- Sidebar toggle button-->
          <!-- 
          <a
            href="#"
            class="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
            id="toggleNavbar"
          >
            <span class="sr-only">Toggle</span>
          </a>
          -->

          <div class="navbar-custom-menu" style="padding-bottom: 2px;">
            <ul class="nav navbar-nav" style="padding-bottom: 2px;">
              <!-- User Account: style can be found in dropdown.less -->

              
              <li style="padding: 0px"><!--class="dropdown user user-menu" -->
                <a
                  style="padding: 0px"
                  href="#"
                  data-toggle="dropdown"
                  @click="logout()"
                >
                  <div
                    style="background-color: #F37DB8; border-radius: 50%"
                  >
                    <img
                      src="@/assets/icons/logout.png"
                      style="width: 40px; height: 40px;"
                      alt="Salir"
                    />
                </div>
                </a>
              </li>
              

            </ul>
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper" style="background-color: #010030">
        <!-- Content Header (Page header) -->
        <!-- 
        <section class="content-header">
          <h1>
            Dashboard
            <small>Resumen</small>
          </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#"><em class="fa fa-dashboard"></em> Home</a>
            </li>
            <li class="active">Resumen</li>
          </ol>
        </section>
        -->

        <!-- Main content -->
        <section class="content" style="background-color: #010030">
          <Nuxt />
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer" style="background-color: #2B2B4B; color: white">
        <div class="pull-right hidden-xs"><strong>Version</strong> 1.5</div>
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
      meta: [
        {
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
          name: "viewport",
        },
      ],
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
    // setTimeout(function () {
    //   $("#toggleNavbar").click();
    // }, 1000);
  },
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
  * {
    font-family: 'Ubuntu', sans-serif;
  }
  .headerStyle {
    display: flex; 
    justify-content: space-between; 
    background-color: #2B2B4B; 
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
  }
  .safetyLogo {
    color: white;
    font-size: 3rem;
    letter-spacing: 6px;
    font-family: 'Ubuntu', sans-serif;
    
  }
  .sfSearchbar{
    background-color: #010030;
    border: none;
    border-radius: 10px;
    color: white;

  }
  ::placeholder {
  color: #2B2B4B; ;
  opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #2B2B4B; ;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
  color: #2B2B4B; ;
  }

  

</style>
