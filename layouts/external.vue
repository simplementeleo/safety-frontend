<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  middleware: ["authenticated"],
  components: {
  },
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
  methods: {},
  async mounted() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("hold-transition");
    body.classList.add("login-page");
    $.widget.bridge("uibutton", $.ui.button);
    
  },
};
</script>

<style>
body {
  background-color: #2B2B4B;
}
</style>
