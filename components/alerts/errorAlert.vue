<template>
  <div>
    <div class="callout callout-danger animate__animated animate__shakeX" v-if="error.message != undefined">
      <h4>Atencion</h4>
      <p>
        {{ error.message }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      error: "api/getError",
    }),
  },
};
</script>

