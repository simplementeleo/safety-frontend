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
            <h4 class="modal-title" id="modalCapturaLabel">
              <strong>Ultima detección</strong>
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="resultadoml != undefined">
            <div class="row">
              <div class="col-md-4 col-xs-4">
                <div class="small-box bgg-blue" style="text-align: center">
                  <div class="inner">
                    <div
                      class="icon"
                      style="position: initial !important; font-size: 48px"
                    >
                      <img
                        src="@/assets/icons/obrero.png"
                        style="width: 40px"
                        alt="etapas"
                      />
                    </div>
                    <h4>{{ obtenerPersonas() }}</h4>

                    <p>Detecciones <br /></p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-xs-4">
                <div class="small-box bgg-blue">
                  <div class="inner">
                    <div
                      class="icon"
                      style="position: initial !important; font-size: 48px"
                    >
                      <img
                        src="@/assets/icons/casco.png"
                        style="width: 40px"
                        alt="etapas"
                      />
                    </div>
                    <h4>{{ obtenerPersonasConCasco() }}</h4>
                    <p>
                      Detecciones con casco <br />
                      <!-- 15-02-2021 18:09 -->
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-xs-4">
                <div class="small-box bgg-blue">
                  <div class="inner">
                    <div
                      class="icon"
                      style="position: initial !important; font-size: 48px"
                    >
                      <img
                        src="@/assets/icons/chaleco.png"
                        style="width: 40px"
                        alt="etapas"
                      />
                    </div>
                    <h4>{{ obtenerPersonasConChaleco() }}</h4>
                    <p>
                      Detecciones con chaleco <br />
                      <!-- 15-02-2021 18:09 -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- resultadoml.url -->
            <img
              id="scream"
              :src="imgCanvas"
              alt="The Scream"
              width="80%"
              height="277"
              style="display: none"
            />
            <img
              src="@/assets/logo.jpg"
              style="display: none"
              id="logoDelirium"
              alt="Logo Delirium"
            />
            <canvas
              id="myCanvas"
              width="1920"
              height="1080"
              style="width: 100%"
            >
              Canvas no es soportado.</canvas
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
      imgCanvas:
        "https://bluelatam1161645.blob.core.windows.net/imagenes-camaras/frame24052021112016-1.jpg",
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
    calcularTotalCasos(classNumber) {
      let total = 0;
      this.resultadoml.personaResultadoml.forEach((persona) => {
        persona.predTypePersona.forEach((ptp) => {
          if (ptp.predType.classNumber == classNumber) total++;
        });
      });
      return total;
    },
    obtenerPersonas() {
      let total = 0;
      this.resultadoml.personaResultadoml.forEach((persona) => {
        total++;
      });
      return total;
    },
    obtenerPersonasConCasco() {
      return this.calcularTotalCasos(1);
    },
    obtenerPersonasSinCasco() {
      return this.calcularTotalCasos(2);
    },
    obtenerPersonasConChaleco() {
      return this.calcularTotalCasos(3);
    },
    obtenerPersonasSinChaleco() {
      return this.calcularTotalCasos(0);
    },
    drawSquare() {
      if (this.resultadoml == undefined) {
        return false;
      }

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      var logoDelirium = document.getElementById("logoDelirium");
      ctx.drawImage(img, 0, 0);
      ctx.drawImage(logoDelirium, 20, 20);
      var canvas = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");

      // context.beginPath();
      // context.rect(70, 130, 70, 60);
      // context.rect(70, 200, 70, 60);
      // context.rect(360, 230, 70, 60);
      // context.rect(680, 190, 70, 60);
      // context.lineWidth = 3;
      // context.strokeStyle = "green";
      // context.stroke();

      context.beginPath();
      this.resultadoml.personaResultadoml.forEach((item, index) => {
        item.predTypePersona.forEach((ptp, index) => {
          if (
            ptp.boundBox.upLeft &&
            ptp.boundBox.upRight &&
            ptp.boundBox.downLeft &&
            ptp.boundBox.downRight
          ) {
            context.rect(
              ptp.boundBox.upLeft,
              ptp.boundBox.upRight,
              ptp.boundBox.downLeft - ptp.boundBox.upLeft,
              ptp.boundBox.downRight - ptp.boundBox.upRight
            );
            context.lineWidth = 2;
            context.strokeStyle = ptp.predType.color;
          }
        });
      });
      context.stroke();
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
    await this.getLastByCamera({ idCamara: this.idCamara });
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
@media (max-width: 767px) {
  .small-box .icon {
    display: inline !important;
  }
}

.bgg-blue {
  background-color: #003b60;
  color: white;
  text-align: center;
}
.bgg-yellow {
  background-color: #ffcd00;
  color: white;
  text-align: center;
}
.bgg-grey {
  background-color: #f4f4f4;
  color: white;
  text-align: center;
}
</style>
