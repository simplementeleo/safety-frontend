const awsS3 = "https://sourcesafety.s3-us-west-2.amazonaws.com/";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Safety',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: `https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css`
      },

      {
        rel: "stylesheet",
        href: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`
      },

      {
        rel: "stylesheet",
        href: `https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.0/css/ionicons.min.css`
      },

      { rel: "stylesheet", href: `${awsS3}source/dist/css/AdminLTE.min.css` },
      { rel: "stylesheet", href: `${awsS3}source/dist/css/skins/_all-skins.min.css` },
      {
        rel: "stylesheet",
        href: `${awsS3}source/bower_components/morris.js/morris.css`
      },

      {
        rel: "stylesheet",
        href: `${awsS3}source/bower_components/jvectormap/jquery-jvectormap.css`
      },

      {
        rel: "stylesheet",
        href:
          `${awsS3}source/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css`
      },

      {
        rel: "stylesheet",
        href:
          `${awsS3}source/bower_components/bootstrap-daterangepicker/daterangepicker.css`
      },

      {
        rel: "stylesheet",
        href:
          `${awsS3}source/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css`
      },

      {
        rel: "stylesheet",
        href:
          `https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic`,
      },
    ],
    script: [
      { src: `${awsS3}source/bower_components/jquery/dist/jquery.js` },
      { src: `${awsS3}source/bower_components/jquery-ui/jquery-ui.min.js` },
      { src: `${awsS3}source/bower_components/bootstrap/dist/js/bootstrap.min.js` },
      { src: `${awsS3}source/bower_components/raphael/raphael.min.js` },
      { src: `${awsS3}source/bower_components/morris.js/morris.min.js` },
      { src: "https://cdn.jsdelivr.net/npm/chart.js@2.8.0" },
      {
        src:
          `${awsS3}source/bower_components/jquery-sparkline/dist/jquery.sparkline.min.js`,
      },
      { src: `${awsS3}source/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js` },
      { src: `${awsS3}source/plugins/jvectormap/jquery-jvectormap-world-mill-en.js` },
      { src: `${awsS3}source/bower_components/jquery-knob/dist/jquery.knob.min.js` },
      { src: `${awsS3}source/bower_components/moment/min/moment.min.js` },
      {
        src:
          `${awsS3}source/bower_components/bootstrap-daterangepicker/daterangepicker.js`,
      },
      {
        src:
          `${awsS3}source/bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js`,
      },
      {
        src:
          `${awsS3}source/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js`,
      },
      {
        src:
          `${awsS3}source/bower_components/jquery-slimscroll/jquery.slimscroll.min.js`,
      },
      { src: `${awsS3}source/bower_components/fastclick/lib/fastclick.js` },
      { src: `${awsS3}source/bower_components/sockjs/sockjs.min.js` },
      { src: `${awsS3}source/bower_components/stomp/stomp.min.js` },
      { src: `${awsS3}source/dist/js/adminlte.min.js` },
      { src: `${awsS3}source/dist/js/pages/dashboard.js` },
      { src: `${awsS3}source/dist/js/demo.js` },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    //'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://dev.compilando.dev:30010/'
    // baseURL: 'http://localhost:8200/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // generate: {
  //   dir: 'gh_pages', // gh_pages/ instead of dist/
  //   subFolders: false // HTML files are generated according to the route path
  // }
}
