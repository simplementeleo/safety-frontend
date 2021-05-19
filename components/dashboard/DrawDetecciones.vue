<template>
  <div>
    <div v-if="resultadoml != undefined">
      <!-- Small boxes (Stat box) -->
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Cantidad detecciones 29-04-2021 11:55</h3>
          <div class="box-tools pull-right">
            <button
              type="button"
              class="btn btn-box-tool"
              data-widget="collapse"
            >
              <span class="fa fa-minus"></span>
            </button>
            <button type="button" class="btn btn-box-tool" data-widget="remove">
              <span class="fa fa-times"></span>
            </button>
          </div>
        </div>
        <div class="box-body chart-responsive">
          <div class="row">
            <div class="col-md-12">
              <img
                id="workers"
                src="https://www.theasianaffairs.com/wp-content/uploads/2020/12/EoxRqAbWMAE7bSH-min.jpg"
                alt="The Scream"
                width="70%"
                height="277"
                style="display: none"
              />

              <canvas id="workersIndex" width="800" height="500">
                Tu navegador no soporta canvas en HTML5.</canvas
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      getWeeklyAverage: "resultadoml/getWeeklyAverageData",
      getLastByCamera: "resultadoml/getLastByCamera",
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
    drawSquare() {
      if (this.resultadoml == undefined) return false;
      var c = document.getElementById("workersIndex");
      var ctx = c.getContext("2d");
      var img = document.getElementById("workers");
      ctx.drawImage(img, 10, 10);
      var canvas = document.getElementById("workersIndex");
      var context = canvas.getContext("2d");

      context.beginPath();
      context.rect(70, 130, 70, 60);
      context.rect(70, 200, 70, 60);
      context.rect(360, 230, 70, 60);
      context.rect(680, 190, 70, 60);
      context.lineWidth = 3;
      context.strokeStyle = "green";
      context.stroke();

      // this.resultadoml.predTypeResultadomlResponse.forEach((item, index) => {
      //   context.beginPath();
      //   context.rect(
      //     item.boundBox.downLeft,
      //     item.boundBox.downRight,
      //     item.boundBox.upLeft,
      //     item.boundBox.upRight
      //   );
      //   context.lineWidth = 1;
      //   // context.strokeStyle = item.predType.color;
      //   context.stroke();
      // });
    },
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
    }),
  },
  async mounted() {
    this.drawSquare();
    // setInterval(async function () {
    //   _$.drawSquare();
    // }, 10000);
  },
};
</script>


<style scoped>
</style>
