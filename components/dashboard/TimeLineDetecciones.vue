<template>
  <div v-if="deteccionesConteoDiario != undefined">
    <div class="row">
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border" style="text-align: center">
            <h3 class="box-title">Tendencia jornada laboral uso EPP</h3>
            <div class="box-tools pull-right"></div>
          </div>
          <div class="box-body chart-responsive">
            <div
              class="chart"
              id="revenue-chart"
              style="height: 300px"
              v-show="deteccionesConteoDiario.cantidadHorario.length > 0"
            ></div>

            <div class="text-center">
              <h4 v-show="deteccionesConteoDiario.cantidadHorario.length == 0">
                <strong>Aun no tenemos datos para mostrarte</strong>
              </h4>
              <div>
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
      getDeteccionesConteoDiario: "resultadoml/getDeteccionesConteoDiario",
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
      deteccionesConteoDiario: "resultadoml/getDeteccionesConteoDiario",
    }),
  },
  async mounted() {
    await this.getDeteccionesConteoDiario();
    if (this.deteccionesConteoDiario.cantidadHorario == undefined) {
      return false;
    }

    Morris.Area({
      element: "revenue-chart",
      resize: true,
      data: this.deteccionesConteoDiario.cantidadHorario,
      hoverCallback: function (index, options, content, row) {
        let title =
          "<b>" +
          row.fechaHora.substring(row.fechaHora.indexOf(" ") + 1) +
          "</b>";
        let item1 = "<br/> Uso casco:" + row.porcentajeCasco + "%";
        let item2 = "<br/> Uso chaleco:" + row.porcentajeChaleco + "%";
        return title + item1 + item2;
      },
      xkey: "fechaHora",
      hideHover: true,
      smooth: true,
      ykeys: ["porcentajeCasco", "porcentajeChaleco"],
      labels: ["Uso casco", "Uso chaleco"],
      lineColors: ["#003b60", "#ffcd00"],
    });
  },
};
</script>


<style scoped>
</style>
