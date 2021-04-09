<template>
  <div class="box machineInfoContainer">
    <div class="data-container">
      <div class="data">
        <h5>Current Layer</h5>
        <p class="data-text">765 / 1355</p>
      </div>
    </div>
    <div class="data-container">
      <div class="data">
        <h5>Oxygen Level:</h5>
        <p class="data-text">{{ values.data.OxygenLevel }}	°C</p>
      </div>
    </div>
    <div class="data-container">
      <div class="data">
        <h5>Building Plate Temperature:</h5>
        <p class="data-text">{{ values.data.Temperature }}	°C</p>
      </div>
    </div>
    <div class="data-container">
      <div class="data">
        <h5>Chamber Temperature:</h5>
         <p class="data-text"> {{ values.data.MassAvailible }} 	°C</p> 
      </div>
    </div>
    <div class="data-container">
      <div class="data">
        <h5>Chamber Humidity:</h5>
        <p class="data-text"> {{ values.data.RemainingPrintHeight }}</p> 
      </div>
    </div>
    <div class="data-container">
      <div class="data">
        <h5>Chamber Pressure:</h5>
        <p class="data-text">{{ values.data.ChamberPressure }} bar</p>
      </div>
      <!--
      <div class="data">
        <h5>Container Mass Available:</h5>
       p class="data-text">{{ values.data.MassAvailible }}</p>
      </div>-->
    </div>
  </div>
</template>

<script>
import LoopTime from "@/data.js"; // <-- Import loop function from JS file

export default {
  name: "MachineInfo",

  data() {
    return {
      // Setup the data object
      values: {
        data: {},
      },
    };
  },

  mounted() {
    // Run the loop function when the component is loaded and mounted in the app, pass the "value" object as data
    LoopTime(this.values);
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

.machineInfoContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.machineInfoContainer .data-container {
  flex-basis: 30%;
  max-width: 30%;
}

.machineInfoContainer .data-container .data {
  text-align: center;
}

.machineInfoContainer .data-container h5 {
  font-size: 13px;
  margin-bottom: 5px;
}

.machineInfoContainer .data-container p.data-text {
  font-size: 13px;
  color: #a4b0bb;
}
</style>
