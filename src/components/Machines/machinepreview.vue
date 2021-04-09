<template>
  <div class="machinepreview">
    <div class="flow flow-left"></div>
    <div class="flow flow-right"></div>
    <div class="modules">
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_01.png" />
        <p class="title">Controle module</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_02.png" />
        <p class="title">AM Core 1</p>
        <p class="subtitle">Inconel</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_03.png" />
        <p class="title">AM Core 2</p>
        <p class="subtitle">Aluminium</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_04.png" />
        <p class="title">Heat treatment</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_05.png" />
        <p class="title">AM Core 3</p>
        <p class="subtitle">Aluminium</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_06.png" />
        <p class="title">AM Core 3</p>
        <p class="subtitle">Aluminium</p>
      </div>
      <div class="module" @click="show = !show">
        <img src="@/assets/printers/additive-7/additive-7_07.png" />
        <p class="title">AM Core 3</p>
        <p class="subtitle">Aluminium</p>
      </div>
    </div>
  </div>
  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <span class="CardTitle">AM Core</span>
      <div class="CloseX" @click="show = !show"></div>
      <div class="Content">
        <h2 style="margin-top:10px;">Job Information</h2>
        <div style="display:flex;">
          <div class="LeftSide">
            <p>Name</p>
            <p>Status</p>
            <p>Additional info</p>
            <p>Job started on</p>
            <p>Est. manufacturing finish</p>
          </div>
          <div class="RightSide">
            <p>QB021_NE_3</p>
            <p>Waiting</p>
            <p>-</p>
            <p>23/3/2021 13:27</p>
            <p>25/3/2021 18:00</p>
          </div>
        </div>
        <h2 style="margin-top:20px;">Core Information</h2>
        <div style="display:flex;">
          <div class="LeftSide">
            <p>Process Conditioning Phase</p>
            <p>Process Conditioning Subphase</p>
            <p>Powder Transport</p>
            <p>Powder Extraction</p>
            <p>Layer</p>
            <p>Remaining Powder</p>
            <p>Material</p>
            <p>Build Plate Temperature</p>
            <p>Oxygen Level</p>
          </div>
          <div class="RightSide">
            <p>Post-manufacturing</p>
            <p>Powder extraction</p>
            <p>Idle</p>
            <p>Idle</p>
            <p>-</p>
            <p>0 mm</p>
            <p>Inconel 718</p>
            <p>25.9 °C</p>
            <p>0.5147%</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: "MachinePreview",
  data: function() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
h2 {
  color: #5268aa;
  margin: 0;
}
.LeftSide {
  width: 60%;
  height: auto;
}
.LeftSide p {
  color: #bbbbbb;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-size: 12px;
  font-style: normal;
  line-height: 1;
}
.RightSide {
  width: 40%;
  height: auto;
}
.RightSide p {
  color: #151539;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-size: 12px;
  font-style: normal;
  line-height: 1;
}

.machinepreview {
  width: 100%;
  position: relative;
  margin-top: 30px;
}

.machinepreview .flow {
  position: absolute;
  top: 0px;
  bottom: 8px;
  width: 10px;
}

.flow-left {
  left: 0px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
}

.flow-right {
  right: 0px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}

.machinepreview .modules {
  overflow: auto;
  white-space: nowrap;
}

.machinepreview .modules .module {
  height: 100%;
  display: inline-block;
  text-align: center;
  vertical-align: top;
}

.machinepreview .modules .module:first-child {
  margin-left: 10px;
}

.machinepreview .modules .module:last-child {
  margin-right: 10px;
}

.machinepreview .modules .module img {
  height: 150px;
}

.machinepreview .modules .module .title {
  font-size: 10px;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
}
.machinepreview .modules .module .subtitle {
  font-size: 10px;
}

/* Overlay CSS */
.Blurredbackground {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
}
.Overlay {
  height: 550px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -5px 10px #0000001f;
}
.CardTitle {
  font-size: 34px;
  color: #151539;
  text-align: left;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-left: 20px;
  line-height: 2;
}
.CloseX {
  height: 40px;
  width: 40px;
  background-image: url("~@/assets/icons/x.svg");
  background-size: contain;
  float: right;
  margin: 15px;
}

.Content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
p {
  font-size: 14px;
}

.fade-out-enter-active {
  animation: fade 0.5s;
}
.fade-out-leave-active {
  animation: fade 0.5s reverse;
}

.slide-fade-enter-active {
  animation: bounce-in 1s reverse;
}
.slide-fade-leave-active {
  animation: bounce-in 1s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes bounce-in {
  0% {
    bottom: 0%;
  }
  100% {
    bottom: -100%;
  }
}
/* End Overlay CSS */
</style>
