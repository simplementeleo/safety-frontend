<template>
  <section class="mainbox radius-general">
    <div class="text-center">
      <h3>Menu</h3>
    </div>

    <div class="item">
      <img src="@/assets/icons/obrero.png" alt="EPP" class="icon-reports-menu">
      <h4>EPP</h4>
    </div>
    <div class="item">
      <img src="@/assets/icons/inout.png" alt="Int-Out Zona" class="icon-reports-menu">
      <h4>In-Out Zona</h4>
    </div>
    <div class="item">
      <img src="@/assets/icons/reportes.png" alt="Reportes" class="icon-reports-menu">
      <h4>Reportes</h4>
      <span class="alertPillGreen"> 2 </span>
    </div>
    <div class="item">
      <img src="@/assets/icons/alertas.png" alt="Alertas" class="icon-reports-menu">
      <h4>Alertas</h4>
      <span class="alertPillPink"> 1 </span>
    </div>
    <div class="arrowContainer">
      <div class="arrow"></div>
    </div>
  </section>
</template>

<style scoped>
  .mainbox {
    background-color: #2B2B4B;
    border: none;
    color: white;
    padding: 10px 15px;
    margin-top: 20px;
    box-shadow: 7px 6px 12px #1b0f1c2b;
  }

  .icon-reports-menu {
    width: 5em;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
  }






  .arrowContainer {
    display: flex;
    justify-content: center;
    margin-top: 11vh;

  }

  .arrow {
    display: inline-block;
    border-right: 4px solid #010030;
    ;
    border-bottom: 4px solid #010030;
    ;
    width: 10px;
    height: 10px;
    transform: rotate(-135deg);
  }

  .alertPillGreen {
    border-radius: 5px;
    width: 40px;
    height: 20px;
    background-color: #4EE273;
    color: white;
    text-align: center;
    margin-top: 10px;
  }

  .alertPillPink {
    border-radius: 5px;
    width: 40px;
    height: 20px;
    background-color: #F37DB8;
    color: white;
    text-align: center;
    margin-top: 10px;
  }

</style>
