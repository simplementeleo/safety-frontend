<template>
  <div class="container-safety" style="background-color: #010030;">
    
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
    
    <div class="row" v-if="resultadoml != undefined">
      <div class="col-md-3">
        <ModalPicture />
        <MenuReportes />
      </div>
      <div class="col-md-9">
        <CantidadCasos />
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
  import PorcentajeSemestral from "@/components/dashboard/PorcentajeSemestral";
  import WeeklyAverage from "@/components/dashboard/WeeklyAverage";
  import TimeLineDetecciones from "@/components/dashboard/TimeLineDetecciones";
  import TimeLinePersonas from "@/components/dashboard/TimeLinePersonas";
  import ModalPicture from "@/components/dashboard/ModalPicture";
  import DrawDetecciones from "@/components/dashboard/DrawDetecciones";
  import MenuReportes from "@/components/dashboard/MenuReportes.vue";
  
  import { mapMutations, mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        idCamara: 1,
      };
    },
    components: {
      ModalPicture,
      DrawDetecciones,
      CantidadCasos,
      TimeLineDetecciones,
      TimeLinePersonas,
      PorcentajeSemestral,
      WeeklyAverage,
      MenuReportes,
   
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

</script>

<style>
/* @media screen and (min-width: 480px) {
  .primerBloque {
  margin-right: -15px;
  margin-left: 12px
}
} */

.container-safety {
  padding: 8.8em 1.5em 0 1.5em ;
  z-index: -1;
}
</style>

