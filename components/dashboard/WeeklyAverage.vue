<template>
  <div id="grafico" v-if="weeklyAverage != undefined">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Resumen semanal</h3>
            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                data-widget="collapse"
              >
                <span class="fa fa-minus"></span>
              </button>
            </div>
          </div>
          <div class="box-body">
            <div class="chart">
              <canvas id="semanaBar" style="height: 230px"></canvas>
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
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
    createWeeklyAverageBar() {
      var ctx = document.getElementById("semanaBar").getContext("2d");
      let data = {
        labels: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
          "Domingo",
        ],
        datasets: [
          {
            label: "Promedio porcentaje semanal uso casco",
            backgroundColor: "#00c0ef",
            borderColor: "grey",
            data: [
              this.weeklyAverage.lunes,
              this.weeklyAverage.martes,
              this.weeklyAverage.miercoles,
              this.weeklyAverage.jueves,
              this.weeklyAverage.viernes,
              this.weeklyAverage.sabado,
              this.weeklyAverage.domingo,
            ],
          },
        ],
      };
      var myBarChart = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {},
      });
      console.log(myBarChart);
    },
  },
  computed: {
    ...mapGetters({
      weeklyAverage: "resultadoml/getWeeklyAverage",
    }),
  },
  async mounted() {
    await this.getWeeklyAverage();
    this.createWeeklyAverageBar();
  },
};
</script>


<style scoped>
</style>
