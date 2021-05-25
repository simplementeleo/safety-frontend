<template>
  <div>
    <div v-if="resultadoml != undefined">
      <!-- Small boxes (Stat box) -->
      <div class="box box-primary">
        <div class="box-header with-border" style="text-align: center">
          <h3 class="box-title">
            Cantidad detecciones Real Time
            <strong>{{ formatDate(resultadoml.horaDeteccion) }}</strong>
          </h3>
          <div class="box-tools pull-right"></div>
        </div>
        <div class="box-body chart-responsive">
          <div class="row">
            <div class="col-lg-12 col-xs-12">
              <div class="small-box bgg-blue" style="text-align: center">
                <div class="inner">
                  <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/obrero.png"
                      style="width: 60px"
                      alt="etapas"
                    />
                  </div>
                  <h3>{{ obtenerPersonas() }}</h3>

                  <p>Número de ingresos al sector monitoreado <br /></p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xs-6">
              <!-- small box -->
              <div class="small-box bgg-blue">
                <div class="inner">
                  <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/casco.png"
                      style="width: 60px"
                      alt="etapas"
                    />
                  </div>
                  <h3>{{ obtenerPersonasSinCasco() }}</h3>
                  <p>
                    Detecciones sin casco <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xs-6">
              <div class="small-box bgg-blue">
                <div class="inner">
                  <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/casco.png"
                      style="width: 60px"
                      alt="etapas"
                    />
                  </div>
                  <h3>{{ obtenerPersonasConCasco() }}</h3>
                  <p>
                    Detecciones con casco <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-xs-6">
              <div class="small-box bgg-yellow">
                <div class="inner">
                  <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/chaleco.png"
                      style="width: 60px"
                      alt="etapas"
                    />
                  </div>
                  <h3>{{ obtenerPersonasSinChaleco() }}</h3>

                  <p>
                    Detecciones sin chaleco <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xs-6">
              <div class="small-box bgg-yellow">
                <div class="inner">
                  <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/chaleco.png"
                      style="width: 60px"
                      alt="etapas"
                    />
                  </div>
                  <h3>{{ obtenerPersonasConChaleco() }}</h3>
                  <p>
                    Detecciones con chaleco <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
                </div>
              </div>
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
    formatDate(fecha) {
      let options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      };
      return new Intl.DateTimeFormat("es-CL", options).format(new Date(fecha));
    },
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
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
    }),
  },
  async mounted() {},
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
