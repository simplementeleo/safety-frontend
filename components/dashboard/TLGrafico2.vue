<template>
  <div><!--v-if="deteccionesMensual != undefined"  -->
    <div class="row">
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box bgg-sfbox radius-general">
          <div class="box-header flex spaceAround" style="color: white">
            <div class="box-tools">
              <h3 class="box-title">
                <strong>Porcentaje de Uso EPP
                {{ this.actual == 0 ? "Primer Semestre" : "Segundo Semestre" }}</strong>
              </h3>
            </div>
          </div>
          <div class="buttons"  v-if="deteccionesMensual != undefined">
              <button
                type="button"
                class="btn"
                data-widget="remove"
                @click="siguiente(0)"
              >
                Primer semestre
              </button>
              <button
                type="button"
                class="btn"
                data-widget="remove"
                @click="siguiente(6)"
              >
                Segundo semestre
              </button>
            </div>
          <div class="box-body chart-responsive">
            <div
              class="chart"
              id="semestral-chart"
              style="height: 28.5vh"
              
            ></div>
            <!-- v-show="deteccionesMensual.porcentajeMes.length > 0"-->
            <!-- <div
              class="text-center"
              v-show="deteccionesMensual.porcentajeMes.length == 0"
            >
              <h4><strong>Aun no tenemos datos para mostrarte</strong></h4>
            </div>-->
            

            <!-- 
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
            -->

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
    
    //Llenar tabla vacia
    if(this.deteccionesMensual == undefined ||
      this.deteccionesMensual.porcentajeMes.length == 0){
      const datosDummy = [
        {mes: 'Enero', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Febrero', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Marzo', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Abril', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Mayo', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Junio', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Julio', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Agosto', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Septiembre', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Octubre', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Noviembre', porcentajeCasco: 0, porcentajeChaleco: 0},
        {mes: 'Diciembre', porcentajeCasco: 0, porcentajeChaleco: 0},
      ]

      this.actualChart = new Morris.Bar({
      element: "semestral-chart",
      resize: true,
      data: datosDummy.slice(0, 6),
      hideHover: 'always',
      hoverCallback: function (index, options, content, row) {
        let title = "<b>" + row.mes + "</b>";
        let item1 = "<br/> Uso casco:" + row.porcentajeCasco + "%";
        let item2 = "<br/> Uso chaleco:" + row.porcentajeChaleco + "%";
        return title + item1 + item2;
      },
      xkey: "mes",
      ykeys: ["porcentajeCasco", "porcentajeChaleco"],
      ymax: 100,
      labels: ["Uso casco", "Uso chaleco"],
      barColors: ["#4EE273", "#0C75F4"],
      //xLabelFormat:function (x) { console.log(x); return x }
      });




    }
    else{
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
      ymax: 100,
      labels: ["Uso casco", "Uso chaleco"],
      barColors: ["#4EE273", "#0C75F4"],
      //xLabelFormat:function (x) { console.log(x); return x }
      });

    }

    

    
  },
};
</script>


<style scoped>
.bgg-sfbox {
  background-color: #2B2B4B;
  border: none;
  padding: 10px;
}
.flex {
  display: flex;
}
.spaceAround{
  justify-content: space-around;
}
.buttons {
  display: flex;
  justify-content: space-around;
}
.buttons button {
  border-radius: 50px;
  height: 30px;
  transition: all .2s ease-in-out;
  background: linear-gradient(45deg, #0C75F4, #54A7EC);
  margin: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.buttons button:hover {
  transform: translateY(-5px);
}
</style>
