<template>
  <div class="jobs box">
    <h4>Jobs</h4>
    <table>
      <tr>
        <td>
          <div class="btn" @click="show = !show">AM Core 1</div>
        </td>
        <td>RN098_NE_3_4</td>
        <td>Queued</td>
      </tr>
      <tr>
        <td>
          <div class="btn" @click="show = !show">AM Core 2</div>
        </td>
        <td>Idle</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <div class="btn" @click="show = !show">AM Core 3</div>
        </td>
        <td>RN098_NE_3_4</td>
        <td>4h 17m remaining</td>
      </tr>
      <tr>
        <td>
          <div class="btn" @click="show = !show">AM Core 4</div>
        </td>
        <td>Idle</td>
        <td></td>
      </tr>
    </table>
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
  name: "MachineJobs",
  data: function() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.box {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
}

.box h4 {
  margin-block-start: 0px;
  margin-block-end: 0px;
}

.box table {
  width: 100%;
  text-align: left;
  font-size: 13px;
}

.btn {
  display: inline-block;
  background: #151539;
  color: #ffffff;
  border: none;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  font-size: 13px;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
}

table {
  border-collapse: collapse;
}

.jobs table td:nth-child(1) {
  color: rgb(170, 170, 170);
}

.jobs table tr:hover {
  background-color: rgb(245, 245, 245);
}

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
