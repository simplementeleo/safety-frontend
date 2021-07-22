<template>
  <section class="box" style="background-color: #2B2B4B; border: none; border-radius: 10px; padding-left: 10px;">
    <div class="box-header" style="text-align: center">
          <h3 class="box-title" style="color: #010030;">Menu</h3>
    </div>
    <div style="color: white">
        <div class="parent">
            <div class="div1"> </div>
            <div class="div2"> 
                <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/obrero.png"
                      style="width: 60px"
                      alt="EPP"
                    />
                </div>
            </div>
            <div class="div3"> <h3 style="color: white">EPP</h3></div>
            <div class="div4">
                <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/inout.png"
                      style="width: 60px"
                      alt="InOut"
                    />
                </div>
            </div>
            <div class="div5"> <h3 style="color: white">In-Out Zona</h3></div>
            <div class="div6"> 6</div>
            <div class="div7"> 7</div>
            <div class="div8"> <h3 style="color: white">Reportes</h3></div>
            <div class="div9">
                <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/reportes.png"
                      style="width: 60px"
                      alt="Reportes"
                    />
                </div>

            </div>
            <div class="div10">
                <div
                    class="icon"
                    style="position: initial !important; font-size: 48px"
                  >
                    <img
                      src="@/assets/icons/alertas.png"
                      style="width: 60px"
                      alt="Alertas"
                    />
                </div>
            </div>
            <div class="div11"> <h3 style="color: white">Alertas</h3> </div>
            <div class="div12"> 12</div>
            </div>
        </div>
  </section>
</template>

<style scoped>
    .parent {
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 3 / 2 / 4; }
.div2 { grid-area: 1 / 1 / 2 / 2; }
.div3 { grid-area: 1 / 2 / 2 / 3; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 3 / 4 / 4; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 3 / 1 / 4 / 2; }
.div10 { grid-area: 4 / 1 / 5 / 2; }
.div11 { grid-area: 4 / 2 / 5 / 3; }
.div12 { grid-area: 4 / 3 / 5 / 4; }

</style>