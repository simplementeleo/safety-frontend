<template>
  <div>
    <!-- 
      <a
      class="btn btn-info btn-block btn-flat"
      data-toggle="modal"
      data-target="#modalCaptura"
      >Ver imagen <span class="fa fa-arrow-circle-right"></span></a>
    -->
    
    <div class="box bgg-sfbox modalPreviewDiv">
      <div>
        <span class="iconoCamara">
          <img
              src="@/assets/icons/camara.png"
              style="width: 30px"
              
            />
        </span>
        
        <a data-toggle="modal"
        data-target="#modalCaptura">
        <img
              id="scream"
              :src="resultadoml.url"
              alt="The Scream"
              width="100%"
              height="70%"
             
            />
        </a>
      </div>
      
      
    </div>

    <div
      class="modal fade"
      id="modalCaptura"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalCapturaLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content bgg-sfbox">
          <!-- 
          <div class="modal-header">
            
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" style="color: white;">&times;</span>
            </button>
          </div>
          -->
          <div class="modal-body" v-if="resultadoml != undefined">
            
            <img
              id="scream"
              :src="resultadoml.url"
              alt="Cámara"
              width="80%"
              height="277"
              style="display: none"
            />
            <img
              src="@/assets/logo.jpg"
              style="display: none"
              id="logoDelirium"
              alt="Logo Delirium"
            />
            <canvas
              id="myCanvas"
              width="1920"
              height="1080"
              style="width: 100%"
            >
              Canvas no es soportado.</canvas
            >
          </div>
          <div class="modal-footer" style="display: flex; justify-content: center; border: none">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Cerrar
            </button>
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
      idCamara: 1,
    };
  },
  methods: {
    ...mapActions({
      getWeeklyAverage: "resultadoml/getWeeklyAverageData",
      getLastByCamera: "resultadoml/getLastByCamera",
    }),
    ...mapMutations({
      setResultadoml: "resultadoml/setResultadoml",
    }),
    calcularTotalCasos(classNumber) {
      let total = 0;
      this.resultadoml.personaResultadoml.forEach((persona) => {
        persona.predTypePersona.forEach((ptp) => {
          if (ptp.predType.classNumber == classNumber) total++;
        });
      });
      return total;
    },
    obtenerPersonas() {
      let total = 0;
      this.resultadoml.personaResultadoml.forEach((persona) => {
        total++;
      });
      return total;
    },
    obtenerPersonasConCasco() {
      return this.calcularTotalCasos(1);
    },
    obtenerPersonasSinCasco() {
      return this.calcularTotalCasos(2);
    },
    obtenerPersonasConChaleco() {
      return this.calcularTotalCasos(3);
    },
    obtenerPersonasSinChaleco() {
      return this.calcularTotalCasos(0);
    },
    drawSquare() {
      if (this.resultadoml == undefined) {
        return false;
      }

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      var logoDelirium = document.getElementById("logoDelirium");
      ctx.drawImage(img, 0, 0);
      ctx.drawImage(logoDelirium, 20, 20);

      var canvas = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");

      // context.beginPath();
      // context.rect(70, 130, 70, 60);
      // context.rect(70, 200, 70, 60);
      // context.rect(360, 230, 70, 60);
      // context.rect(680, 190, 70, 60);
      // context.lineWidth = 3;
      // context.strokeStyle = "green";
      // context.stroke();

      context.beginPath();
      this.resultadoml.personaResultadoml.forEach((item, ind1) => {
        item.predTypePersona.forEach((ptp, ind2) => {
          //console.log(ptp.boundBox.upLeft, ptp.boundBox.upRight , ptp.boundBox.downLeft , ptp.boundBox.downRight)
          if (
            ptp.boundBox.upLeft &&
            ptp.boundBox.upRight &&
            ptp.boundBox.downLeft &&
            ptp.boundBox.downRight
          ) {
            context.rect(
              ptp.boundBox.upLeft,
              ptp.boundBox.upRight,
              ptp.boundBox.downLeft,
              ptp.boundBox.downRight
            );
            context.lineWidth = 2;
            context.strokeStyle = ptp.predType.color;
          }
        });
      });
      context.stroke();
    },
  },
  computed: {
    ...mapGetters({
      resultadoml: "resultadoml/getResultadoml",
    }),
  },
  watch: {},
  async mounted() {
    // $("#modalCaptura").modal({
    //   backdrop: "static",
    //   keyboard: false,
    // });

    await this.getLastByCamera({ idCamara: this.idCamara });
    this.drawSquare();
    let _$ = this;
    setInterval(async function () {
      _$.drawSquare();
    }, 1000);
  },
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
.bgg-sfbox {
  background-color: #2B2B4B;
  border-radius: 10px;
}
.modalPreviewDiv {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.modalPreviewDiv div {
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 10px;
}
img:hover {
  cursor: pointer;
  
}
.iconoCamara {
  position: absolute;
  top: 17%; 
  left: 7%;
  color: white;
  border-radius: 50%;
  background-color:  #010030;
}
</style>
