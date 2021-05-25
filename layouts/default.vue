<template>
  <div>
    <div class="wrapper">
      <header class="main-header">
        <!-- Logo -->
        <a href="/" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini">S<strong>T</strong></span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg">SAFE<strong>TY</strong></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
          <!-- Sidebar toggle button-->
          <a
            href="#"
            class="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
            id="toggleNavbar"
          >
            <span class="sr-only">Toggle</span>
          </a>

          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  @click="logout()"
                >
                  Salir
                </a>
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

          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">Menu navegación</li>
            <li class="active treeview">
              <NuxtLink to="/">
                <em class="fa fa-dashboard"></em> <span>Dashboard</span>
              </NuxtLink>
            </li>

            <!-- <li class="header">Utilidades</li>
            <li>
              <a href="https://www.deliryum.ai/"
              target="_Blank"
                ><em class="fa fa-circle-o text-aqua"></em>
                <span>Pagina web Deliryum</span></a
              >
            </li> -->
            <!-- <li>
              <a href="https://www.deliryum.ai/safety"
                ><em class="fa fa-circle-o text-aqua"></em>
                <span>Soporte SafetyApp</span></a
              >
            </li> -->
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
              <a href="#"><em class="fa fa-dashboard"></em> Home</a>
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
        <div class="pull-right hidden-xs"><strong>Version</strong> 1.0.0</div>
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
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
  async mounted() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("skin-yellow");
    body.classList.add("sidebar-mini");
    body.classList.add("sidebar-collapse");
    body.classList.add("hold-transition");
    $.widget.bridge("uibutton", $.ui.button);
    // setTimeout(function () {
    //   $("#toggleNavbar").click();
    // }, 1000);
  },
};
</script>
<style>
</style>
