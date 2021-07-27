<template>
  <div><!--  v-if="deteccionesConteoDiario != undefined"-->
    <div class="row" style="margin-top: -25px;">
      <div class="col-md-12">
        <!-- AREA CHART -->
        <div class="box bgg-sfbox">
          <div class="box-header" style="text-align: center; color: white">
            <h3 class="box-title"><strong>Porcentaje de uso EPP Jornada</strong></h3>
            <div class="box-tools pull-right"></div>
          </div>
          <div class="box-body chart-responsive">
            <div
              class="chart"
              id="revenue-chart"
              style="height: 29vh"
              
            ></div>
            <!-- v-show="deteccionesConteoDiario.cantidadHorario.length > 0"-->

            <!--
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
    return {};
  },
  methods: {
    ...mapActions({
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
    
    /* 
    if (this.deteccionesConteoDiario.cantidadHorario == undefined) {
      return false
    }*/

    //Crear datos
    if (this.deteccionesConteoDiario == undefined ||
      this.deteccionesConteoDiario.cantidadHorario.length == 0) {
        //datos para llenar una tabla vacia
        let datosDummy = [];
        for(let contador=6; contador<19;contador++){
          if(contador < 12){
            let horaDummy = {fechaHora: `2021-01-01 0${contador}:00`,
            porcentajeCasco: 0,
            porcentajeChaleco: 0}
            datosDummy.push(horaDummy)
          }
          else{
            let horaDummy = {fechaHora: `2021-01-01 ${contador}:00`,
            porcentajeCasco: 0,
            porcentajeChaleco: 0}
            datosDummy.push(horaDummy)
          }
          
        }
        //Si no hay datos, mostrar lo siguiente

        Morris.Line({
        element: "revenue-chart",
        resize: true,
        data: datosDummy,
        hoverCallback: function (index, options, content, row) {
          let title =
            "<b>" +
            "Hora" +
            "</b>";
          let item1 = "<br/> Uso casco:" + row.porcentajeCasco + "%";
          let item2 = "<br/> Uso chaleco:" + row.porcentajeChaleco + "%";
          return title + item1 + item2;
        },
        xkey: "fechaHora",
        hideHover: 'always',
        smooth: true,
        ymax: 100,
        ykeys: ["porcentajeCasco", "porcentajeChaleco"],
        labels: ["Uso casco", "Uso chaleco"],
        lineColors: ["#4EE273", "#0C75F4"],
      });

    }
    else {
      //Si hay datos, mostrar
      Morris.Line({
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
        ymax: 100,
        ykeys: ["porcentajeCasco", "porcentajeChaleco"],
        labels: ["Uso casco", "Uso chaleco"],
        lineColors: ["#4EE273", "#0C75F4"],
      });

    }
    
  },
};
</script>

<style scoped>
.bgg-sfbox {
  background-color: #2B2B4B;
  border-radius: 10px;
  border: none;
}
</style>