<template>
  <div>
    <div class="wrapper">
      <header class="main-header">
        <!-- Logo -->
        <a href="/" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini">S<b>T</b></span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg">SAFE<b>TY</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
          <!-- Sidebar toggle button-->
          <a
            href="#"
            class="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span class="sr-only">Toggle</span>
          </a>

          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <!-- <img
                    src="source/dist/img/user2-160x160.jpg"
                    class="user-image"
                    alt="User Image"
                  />
                  <span class="hidden-xs">Jaime Altozano</span> -->
                  Opciones
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  
                  <!-- <li class="user-header">
                    <img
                      src="source/dist/img/user2-160x160.jpg"
                      class="img-circle"
                      alt="User Image"
                    />

                    <p>
                      Jaime Altozano <br />
                    </p>
                  </li> -->
                  <!-- Menu Footer-->
                  <li class="user-footer bg-dark">
                    <div class="pull-right">
                      <button class="btn btn-default btn-flat" @click="logout()">Salir</button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <!-- <div class="user-panel">
            <div class="pull-left image">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png"
                class="img-circle"
                alt="Usuario"
              />
            </div>
            <div class="pull-left info">
              <p>Jaime Altozano</p>
            </div>
          </div> -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Menu navegación</li>
            <li class="active treeview">
              <a href="#">
                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li class="active">
                  <a href="/"
                    ><i class="fa fa-circle-o"></i> Resumen</a
                  >
                </li>
              </ul>
            </li>

            <li class="header">Utilidades</li>
            <li>
              <a href="#"
                ><i class="fa fa-circle-o text-aqua"></i>
                <span>Pagina web</span></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-circle-o text-aqua"></i> <span>Soporte</span></a
              >
            </li>
          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            Dashboard
            <small>Resumen</small>
          </h1>
          <ol class="breadcrumb">
            <li>
              <a href="#"><i class="fa fa-dashboard"></i> Home</a>
            </li>
            <li class="active">Resumen</li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <Nuxt />
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <div class="pull-right hidden-xs"><b>Version</b> 1.0.0</div>
        <strong>Copyright &copy; 2021 <a href="#">Safety</a>.</strong> Todos los
        derechos reservados.
      </footer>

      <!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>
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
    logout(){
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  async mounted() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("skin-blue");
    body.classList.add("sidebar-mini");
    body.classList.add("hold-transition");
    $.widget.bridge('uibutton', $.ui.button);
  },
};
</script>
<style>
</style>
