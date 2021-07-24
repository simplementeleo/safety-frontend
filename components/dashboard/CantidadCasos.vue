<template>
  <div>
    <div v-if="resultadoml != undefined">
      <!-- Small boxes (Stat box) -->
      <div class="box" style="background-color:rgba(0, 0, 0, 0); border: none;">

        <!-- 
        <div class="box-header" style="text-align: center">
          <h3 class="box-title">
            Cantidad detecciones Real Time
            <strong>{{ formatDate(resultadoml.horaDeteccion) }}</strong>
          </h3>
          <div class="box-tools pull-right"></div>
        </div>
        -->
        
        <div class="box-body chart-responsive">
          <div class="row">

            <div class="col-lg-4 col-xs-12" style="padding-right: 0">
              <div class="small-box bgg-ingresos flexSpace" style="margin-left: 0px; margin-right: 0px">
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
                  
                </div>

                <div class="flexCenter" style="text-align: center; flex-direction: column">
                  <p style="margin: 1px">Ingresos al sector<br /></p>
                  <h3 style="margin: 1px">{{ obtenerPersonas() }}</h3>
                </div>
              </div>
            </div>
            <!-- 
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
                  <h3>{{ obtenerPersonasSinCasco() }}</h3>
                  <p>
                    Detecciones sin casco <br />
                    
                  </p>
                </div>
              </div>
            </div>
            -->
            <div class="col-lg-4 col-xs-6" style="padding-right: 0">
              <div class="small-box bgg-cascos flexSpace">
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
                  
                </div>
                <div class="flexCenter" style="text-align: center; flex-direction: column">
                  <p style="margin: 1px">
                    Uso Casco
                    <!-- 15-02-2021 18:09 -->
                  </p>
                  <h3 style="margin: 1px">{{ obtenerPersonasConCasco() }}</h3>
                </div>
              </div>
            </div>
            <!-- 
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
                    
                  </p>
                </div>
              </div>
            </div>
            -->

            <div class="col-lg-4 col-xs-6">
              <div class="small-box bgg-chalecos flexSpace">
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
                  
                </div>
                <div  class="flexCenter" style="text-align: center; flex-direction: column">
                  <p style="margin: 1px">
                    Uso Chaleco <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
                  <h3  style="margin: 1px">{{ obtenerPersonasConChaleco() }}</h3>
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
.bgg-ingresos {
  background-image: linear-gradient(to right, #7749EE , #B539F9);
  color: white;
  border-radius: 10px;
}
.bgg-cascos {
  background-image: linear-gradient(to right, #4EE273 ,#4AE4C4);
  color: white;
  border-radius: 10px;
}
.bgg-chalecos {
  background-image: linear-gradient(to right, #0C75F4 ,#54A7EC);
  color: white;
  border-radius: 10px;
}
.flexSpace {
  display: flex;
  justify-content: space-around;
}
.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
