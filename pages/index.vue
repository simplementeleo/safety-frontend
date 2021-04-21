<template>
  <div>
    <div class="row" style="display: none">
      <div class="col-md-12">
        <button class="btn btn-danger" @click="sendName(1)">Test 1</button>
        <button class="btn btn-danger" @click="sendName(2)">Test 2</button>
        <button class="btn btn-danger" @click="sendName(3)">Test 3</button>
      </div>
    </div>
    <div v-if="resultadoml != undefined" id="main_body">
      <!-- camaras -->
      <div class="row">
        <div class="col-md-12">
          <label for="">Seleccione la camara</label>
          <select name="" id="" class="form-control" v-model="idCamara" @change="connect()">
            <option value="1">Camara 1</option>
            <option value="3">Camara 2</option>
            <option value="4">Camara 3</option>
          </select>
        </div>
      </div>
      <br />
      <!-- Small boxes (Stat box) -->
      <div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{ obtenerPersonasConCasco() }}</h3>
              <p>
                Personas sin casco <br />
                Ultima detección<br />
                <!-- 15-02-2021 18:09 -->
              </p>
            </div>
            <div class="icon">
              <i class="fa fa-exclamation-triangle"></i>
            </div>
            <a href="#" class="small-box-footer"
              >Ver mas <i class="fa fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>{{ obtenerPersonasSinCasco() }}</h3>
              <p>
                Personas con casco <br />
                Ultima detección<br />
                <!-- 15-02-2021 18:09 -->
              </p>
            </div>
            <div class="icon">
              <i class="fa fa-shield"></i>
            </div>
            <a href="#" class="small-box-footer"
              >Ver mas <i class="fa fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>{{ resultadoml.predTypeResultadomlResponse.length }}</h3>

              <p>
                Personas detectadas <br />
                Ultima detección<br />
                <!-- 15-02-2021 18:09 -->
              </p>
            </div>
            <div class="icon">
              <i class="fa fa-user"></i>
            </div>
            <a href="#" class="small-box-footer"
              >Ver mas <i class="fa fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-3 col-xs-6">
          <div class="small-box bg-green">
            <div class="inner">
              <h3>80<sup style="font-size: 20px">%</sup></h3>

              <p>
                Promedio uso casco durante el dia <br />
                Ultima detección<br />
                <!-- 15-02-2021 18:09 -->
              </p>
            </div>
            <div class="icon">
              <i class="ion ion-stats-bars"></i>
            </div>
            <a href="#" class="small-box-footer"
              >Ver mas <i class="fa fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div id="loader" v-show="resultadoml == undefined">
      <center>
        <i class="fa fa-refresh fa-spin" style="font-size: 5em"></i>
      </center>
    </div>
    <br />
    <div id="grafico" v-if="weeklyAverage != undefined">
      <!-- /.row -->
      <div class="row">
        <div class="col-md-12">
          <!-- BAR CHART -->
          <div class="box box-success">
            <div class="box-header with-border">
              <h3 class="box-title">Resumen semanal</h3>

              <div class="box-tools pull-right">
                <button
                  type="button"
                  class="btn btn-box-tool"
                  data-widget="collapse"
                >
                  <i class="fa fa-minus"></i>
                </button>
              </div>
            </div>
            <div class="box-body">
              <div class="chart">
                <canvas id="semanaBar" style="height: 230px"></canvas>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </div>
    </div>
    <img
      id="scream"
      src="https://thumbs.dreamstime.com/x/opini%C3%B3n-de-la-c%C3%A1mara-de-seguridad-del-pov-95210317.jpg"
      alt="The Scream"
      width="220"
      height="277"
      style="display:none"
    />
    <canvas id="myCanvas" width="500" height="500">
      Your browser does not support the HTML5 canvas tag.</canvas
    >
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      idCamara: 1,
      stompClient: null,
      connected: false,
      resultadoml: undefined,
    };
  },
  methods: {
    ...mapActions({
      getWeeklyAverage: "resultadoml/getWeeklyAverage",
    }),
    drawSquare() {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");
      ctx.drawImage(img, 10, 10);
      var canvas = document.getElementById("myCanvas");
      var context = canvas.getContext("2d");

      context.beginPath();
      context.rect(188, 50, 200, 100);
      context.lineWidth = 1;
      context.strokeStyle = "red";
      context.stroke();
    },
    obtenerPersonasConCasco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predTypeResponse.id == 2;
      }).length;
    },
    obtenerPersonasSinCasco() {
      return this.resultadoml.predTypeResultadomlResponse.filter((item) => {
        return item.predTypeResponse.id == 1;
      }).length;
    },
    async connect(idCamara) {
      this.disconnect(idCamara);
      var socket = await new SockJS(
        "https://dev.compilando.dev:30010/gs-guide-websocket"
      );
      this.stompClient = Stomp.over(socket);
      let _this = this;
      this.stompClient.connect({}, function (frame) {
        _this.setConnected(true);
        console.log("Connected: " + frame);
        _this.stompClient.subscribe(
          "/topic/last-resultadoml/" + idCamara,
          function (greeting) {
            console.log(JSON.parse(greeting.body));
            _this.setResultadoml(JSON.parse(greeting.body));
          }
        );
      });
    },
    disconnect() {
      if (this.stompClient !== null) {
        this.stompClient.disconnect();
      }
      this.setConnected(false);
      console.log("Disconnected");
    },
    sendName(numeroCamara) {
      let predTypeResultadomlResponse = [
        {
          id: 1,
          predTypeResponse: {
            id: Math.floor(Math.random() * 2) + 1,
            type: "Caso ausente",
          },
        },
        {
          id: 2,
          predTypeResponse: {
            id: Math.floor(Math.random() * 2) + 1,
            type: "Caso ausente",
          },
        },
        {
          id: 3,
          predTypeResponse: {
            id: Math.floor(Math.random() * 2) + 1,
            type: "Casco presente",
          },
        },
      ];
      let resultadomlResponse = {
        id: 1,
        camara: {},
        url: "https://ak.picdn.net/shutterstock/videos/14320021/thumb/3.jpg",
        predTypeResultadomlResponse: predTypeResultadomlResponse,
      };
      this.stompClient.send(
        "/app/save-resultadoml/" + numeroCamara,
        {},
        JSON.stringify(resultadomlResponse)
      );
    },
    setResultadoml(resultado) {
      this.resultadoml = resultado;
      //alert(JSON.stringify(resultado));
    },
    setConnected(connected) {
      this.connected = connected;
    },
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
    },
  },
  computed: {
    ...mapGetters({
      weeklyAverage: "resultadoml/getWeeklyAverage",
      resultadoml: "resultadoml/resultadoml",
    }),
  },
  async mounted() {
    this.drawSquare();
    await this.connect(1);
    //await this.getWeeklyAverage();
    //this.createWeeklyAverageBar();
    let _$ = this;
    setInterval(function () {
      _$.sendName(1);
    }, 2000);
  },
};
</script>

<style>
</style>

