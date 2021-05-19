<template>
  <div>
    <a
      class="btn btn-info btn-block btn-flat"
      data-toggle="modal"
      data-target="#modalCaptura"
      >Ver imagen <span class="fa fa-arrow-circle-right"></span
    ></a>

    <div
      class="modal fade"
      id="modalCaptura"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalCapturaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalCapturaLabel">Ultima detección</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img
              id="scream"
              src="https://www.theasianaffairs.com/wp-content/uploads/2020/12/EoxRqAbWMAE7bSH-min.jpg"
              alt="The Scream"
              width="100%"
              height="277"
              style="display: none"
            />

            <canvas id="myCanvas" width="1090" height="500">
              Your browser does not support the HTML5 canvas tag.</canvas
            >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Cerrar
            </button>
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
    return {
      idCamara: 1,
    };
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
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      ctx.drawImage(img, 10, 10);
      var canvas = document.getElementById("myCanvas");
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
  watch: {
    idCamara: function (val) {
      alert(val);
    },
  },
  async mounted() {
    // $("#modalCaptura").modal({
    //   backdrop: "static",
    //   keyboard: false,
    // });
    // await this.getLastByCamera({ idCamara: this.idCamara });
    this.drawSquare();
    let _$ = this;
    setInterval(async function () {
      // await _$.getLastByCamera({ idCamara: _$.idCamara });
      _$.drawSquare();
    }, 10000);
  },
};
</script>


<style scoped>
</style>
