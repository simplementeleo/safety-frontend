<template>
  <div>
    <div v-if="resultadoml != undefined">
      <!-- Small boxes (Stat box) -->
      <div class="box box-primary">
        <div class="box-header with-border" style="text-align: center">
          <h3 class="box-title">
            Cantidad detecciones Real Time <strong>29-04-2021 11:55</strong>
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

                  <p>
                    Detectados en sector <br />
                    <!-- 15-02-2021 18:09 -->
                  </p>
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
                    Sin casco <br />
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
                    Con casco <br />
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
                    Sin chaleco <br />
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
                    Con chaleco <br />
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
    obtenerPersonas() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item;
      }).length;
    },
    obtenerPersonasConCasco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predType.classNumber == 1;
      }).length;
    },
    obtenerPersonasSinCasco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predType.classNumber == 2;
      }).length;
    },
    obtenerPersonasConChaleco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predType.classNumber == 3;
      }).length;
    },
    obtenerPersonasSinChaleco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predType.classNumber == 0;
      }).length;
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
