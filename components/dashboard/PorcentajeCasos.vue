<template>
  <div>
    <div v-if="resultadoml != undefined">
      <!-- Small boxes (Stat box) -->
      <div class="box box-primary">
        <div class="box-header with-border" style="text-align: center">
          <h3 class="box-title">
            Porcentaje deteccion <strong>29-04-2021 11:55</strong>
          </h3>
          <div class="box-tools pull-right"></div>
        </div>
        <div class="box-body chart-responsive">
          <div class="row">
            <div class="col-lg-6 col-xs-6">
              <div class="small-box bgg-yellow">
                <div class="inner">
                  <h4 style="color: white; text-align: center">
                    <strong>Porcentaje de uso chaleco</strong>
                  </h4>
                  <div
                    id="percent-vest"
                    
                  ></div>
                  <!-- <canvas id="percent-vest" width="400" height="400"></canvas> -->
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xs-6">
              <div class="small-box bgg-blue">
                <div class="inner">
                  <h4 style="color: white; text-align: center">
                    <strong>Porcentaje de uso casco</strong>
                  </h4>
                  <div
                    id="percent-helmet"
                    
                  ></div>
                  <!-- <canvas id="percent-helmet" width="400" height="400"></canvas> -->
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
    drawChartGoogleHelmet() {
      var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Usa Casco", this.obtenerPersonasConCasco() || 100],
        ["No usa Casco", this.obtenerPersonasSinCasco()],
      ]);

      var options = {
        backgroundColor: "transparent",
        legend: { position: "bottom", textStyle: {color: 'white'} },
        slices: {
          0: { color: "#ffcd00" },
          1: { color: "grey" },
        },
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("percent-helmet")
      );

      chart.draw(data, options);
    },
    drawChartGoogleVest() {
      var data = google.visualization.arrayToDataTable([
        ["Task", "Hours per Day"],
        ["Usa Chaleco", this.obtenerPersonasConChaleco() || 100],
        ["No usa Chaleco", this.obtenerPersonasSinChaleco()],
      ]);

      var options = {
        backgroundColor: "transparent",
        legend: { position: "bottom", textStyle: {color: 'white'} },
        slices: {
          0: { color: "#003b60" },
          1: { color: "grey" },
        },
      };

      var chart = new google.visualization.PieChart(
        document.getElementById("percent-vest")
      );

      chart.draw(data, options);
    },
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
    }),
  },
  async mounted() {
    let conCasco = this.obtenerPersonasConCasco();
    let sinCasco = this.obtenerPersonasSinCasco();

    let conChaleco = this.obtenerPersonasConChaleco();
    let sinChaleco = this.obtenerPersonasSinChaleco();

    let totalCasco = conCasco + sinCasco;
    let totalChaleco = conChaleco + sinChaleco;

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChartGoogleHelmet);

    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(this.drawChartGoogleVest);
  },
};
</script>


<style scoped>
.bgg-blue {
  background-color: #003b60;
}
.bgg-yellow {
  background-color: #ffcd00;
}
.bgg-grey {
  background-color: #f4f4f4;
}
</style>
