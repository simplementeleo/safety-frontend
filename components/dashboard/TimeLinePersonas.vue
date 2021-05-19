<template>
  <div v-if="totalPersonasDiario != undefined">
    <div class="row">
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Cantidad total por horario</h3>
            <div class="box-tools pull-right"></div>
          </div>
          <div class="box-body chart-responsive">
            <div
              class="chart"
              id="personas-zona"
              style="height: 300px"
              v-show="totalPersonasDiario.cantidadPersonasHorario.length > 0"
            ></div>
            <div
              class="text-center"
              v-show="totalPersonasDiario.cantidadPersonasHorario.length == 0"
            >
              <h4><strong>Aun no tenemos datos para mostrarte</strong></h4>
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
      getTotalPersonasDiario: "resultadoml/getTotalPersonasDiario",
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
      totalPersonasDiario: "resultadoml/getTotalPersonasDiario",
    }),
  },
  async mounted() {
    await this.getTotalPersonasDiario();
    if (this.totalPersonasDiario == undefined) {
      return false;
    }
    Morris.Line({
      element: "personas-zona",
      resize: true,
      data: this.totalPersonasDiario.cantidadPersonasHorario,
      hoverCallback: function (index, options, content, row) {
        let title =
          "<b>" +
          row.fechaHora.substring(row.fechaHora.indexOf(" ") + 1) +
          "</b>";
        let item1 = "<br/> Ingresos al sector: " + row.cantidad;
        return title + item1;
      },
      xkey: "fechaHora",
      smooth: false,
      ykeys: ["cantidad"],
      labels: ["Personal"],
      lineColors: ["#003b60"],
      // xLabelFormat:function (x) { console.log(x); return x }
    });
  },
};
</script>


<style scoped>
</style>
