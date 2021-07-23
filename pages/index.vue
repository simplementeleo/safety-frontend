<template>
  <div style="background-color: #010030">
    
    <div class="row" v-show="resultadoml != undefined">
      
      <!-- 
      <div class="col-md-6">
        <label for="">Seleccione la camara</label>
        <select
          name=""
          id=""
          class="form-control"
          v-model="idCamara"
          @change="cambiarCamara()"
        >
          <option value="1">Camara 1</option>
          
        </select>
      </div>
      -->
      
    </div>
    <br />
    <div class="row" v-if="resultadoml != undefined">
      <div class="col-md-3">
        <ModalPicture />
        <MenuReportes />
      </div>
      <div class="col-md-9">
        <CantidadCasos />
      </div>
      <div class="col-md-9">
        <div class="col-md-4" style="color: white">
          <PorcentajeCasos />
        </div>
        <div class="col-md-8" style="color: white">
          <TLGrafico1 />
          <TLGrafico2 />
        </div>
      </div>
      
      <!-- 
      <div class="col-md-9">
        
        <TimeLineDetecciones />
        <PorcentajeSemestral />
        <TimeLinePersonas /> 
      </div>
      -->
      
  
    </div>
    <div id="loader" v-show="resultadoml == undefined">
      <div style="display: table; margin: 0 auto">
        <span class="fa fa-refresh fa-spin" style="font-size: 5em"></span>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
  import CantidadCasos from "@/components/dashboard/CantidadCasos";
  import PorcentajeCasos from "@/components/dashboard/PorcentajeCasos";
  import PorcentajeSemestral from "@/components/dashboard/PorcentajeSemestral";
  import WeeklyAverage from "@/components/dashboard/WeeklyAverage";
  import TimeLineDetecciones from "@/components/dashboard/TimeLineDetecciones";
  import TimeLinePersonas from "@/components/dashboard/TimeLinePersonas";
  import ModalPicture from "@/components/dashboard/ModalPicture";
  import DrawDetecciones from "@/components/dashboard/DrawDetecciones";
  import MenuReportes from "@/components/dashboard/MenuReportes.vue";
  import TLGrafico1 from "@/components/dashboard/TLGrafico1.vue";
  import TLGrafico2 from "@/components/dashboard/TLGrafico2.vue";
  import { mapMutations, mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        idCamara: 1,
      };
    },
    components: {
      PorcentajeCasos,
      ModalPicture,
      DrawDetecciones,
      CantidadCasos,
      TimeLineDetecciones,
      TimeLinePersonas,
      PorcentajeSemestral,
      WeeklyAverage,
      MenuReportes,
      TLGrafico1,
      TLGrafico2,
    },
    methods: {
      ...mapActions({
        getLastByCamera: "resultadoml/getLastByCamera",
      }),
      ...mapMutations({
        setResultadoml: "resultadoml/setResultadoml",
      }),
      async cambiarCamara() {
        this.setResultadoml(undefined);
        await this.getLastByCamera({ idCamara: this.idCamara });
      },
    },
    computed: {
      ...mapGetters({
        resultadoml: "resultadoml/getResultadoml",
      }),
    },
    async mounted() {
      this.getLastByCamera({ idCamara: this.idCamara });
      let _$ = this;
      setInterval(async function () {
        await _$.getLastByCamera({ idCamara: _$.idCamara });
      }, 20000);
    },
  };

  console.log("ENTRANDO AL INDEX");
</script>

<style>
  
  
</style>

