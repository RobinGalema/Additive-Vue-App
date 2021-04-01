<template>
  <div class="machinecard">
    <div>
      <div :class="[machine.error ? 'error' : '', 'flag']">

      </div>
      <h4>{{ machine.title }}</h4>
      <p>Core {{ machine.core }} | {{ machine.name }}</p>
      <img src="@/assets/printers/additive-5module-view3-2304.png">
      <div :class="[machine.state == '' ? 'statepadding' : '', 'progressbar']">
        <div :style="{width: machine.progress + '%'}"></div>
        <p>{{ machine.timeRemaining }} remaining</p>
      </div>
      <p class="state" v-if="machine.state">{{ machine.state }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MachineCard',
  props: {
    machine: Object
  }
}
</script>

<style scoped>
.machinecard > div {
  margin: 5px;
  padding: 5px;
  background-color: #ebebeb;
  border-radius: 5px;
  position: relative;
}

.machinecard h4 {
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 15px;
}

.machinecard p {
  margin-block-start: 0px;
  margin-block-end: 0px;
  font-size: 10px
}

.machinecard > div > img {
  width: 100%;
}

.machinecard > div > .progressbar {
  height: 14px;
  width: 100%;
  border-radius: 7px;
  background-color: gray;
  position: relative;
  overflow: hidden;
}

.machinecard > div > .progressbar > div {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  background-color: #5268aa;
}

.machinecard > div > .progressbar > p {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 1px;
  text-align: center;
  color: white;
}

.machinecard > div > .state {
  margin-top: 5px;
  height: 12px;
  text-align: center;
}

.statepadding {
  margin-bottom: 17px;
}

.flag {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #5268aa;
  width: 20px;
  height: 20px;
  border-radius: 0px 5px 0px 5px;
}

.flag.error {
  background-color: #fe5b1d;
  background-image: url("~@/assets/icons/icon-alertoctagon_128x128.png");
  background-size: 12px;
  background-position: center;
  background-repeat: no-repeat;
}
</style>