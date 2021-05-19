<template>
  <div v-if="deteccionesMensual != undefined">
    <div class="row">
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">
              Resumen uso elementos protección personal -
              {{ this.actual == 0 ? "Primer Semestre" : "Segundo Semestre" }}
            </h3>
            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn"
                data-widget="remove"
                @click="siguiente(0)"
              >
                Primer Semestre
              </button>
              <button
                type="button"
                class="btn"
                data-widget="remove"
                @click="siguiente(6)"
              >
                Segundo Semestre
              </button>
            </div>
          </div>
          <div class="box-body chart-responsive">
            <div
              class="chart"
              id="semestral-chart"
              style="height: 300px"
              v-show="deteccionesMensual.porcentajeMes.length > 0"
            ></div>
            <div
              class="text-center"
              v-show="deteccionesMensual.porcentajeMes.length == 0"
            >
              <h4><strong>Aun no tenemos datos para mostrarte</strong></h4>
            </div>

            <div class="text-center">
              <span
                style="background-color: #003b60; padding: 1px 40px 1px 1px"
              ></span>
              Uso casco
              <span
                style="
                  background-color: #ffcd00;
                  padding: 1px 40px 1px 1px;
                  margin-left: 10px;
                "
              ></span>
              Uso chaleco
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
    return {
      actual: 0,
      actualChart: undefined,
    };
  },
  methods: {
    ...mapActions({
      getWeeklyAverage: "resultadoml/getWeeklyAverageData",
      getLastByCamera: "resultadoml/getLastByCamera",
      getDeteccionesMensual: "resultadoml/getDeteccionesMensual",
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
    siguiente(posi) {
      this.actual = posi;
      let final = posi==0?6:12;
      this.actualChart.setData(this.deteccionesMensual.porcentajeMes.slice(posi, final));      
    },
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
      deteccionesMensual: "resultadoml/getDeteccionesMensual",
    }),
  },
  async mounted() {
    await this.getDeteccionesMensual();
    this.actualChart = new Morris.Bar({
      element: "semestral-chart",
      resize: true,
      data: this.deteccionesMensual.porcentajeMes.slice(0, 6),
      hideHover: true,
      hoverCallback: function (index, options, content, row) {
        let title = "<b>" + row.mes + "</b>";
        let item1 = "<br/> Uso casco:" + row.porcentajeCasco + "%";
        let item2 = "<br/> Uso chaleco:" + row.porcentajeChaleco + "%";
        return title + item1 + item2;
      },
      xkey: "mes",
      ykeys: ["porcentajeCasco", "porcentajeChaleco"],
      labels: ["Uso casco", "Uso chaleco"],
      barColors: ["#003b60", "#ffcd00"],
      //xLabelFormat:function (x) { console.log(x); return x }
    });
  },
};
</script>


<style scoped>
</style>
