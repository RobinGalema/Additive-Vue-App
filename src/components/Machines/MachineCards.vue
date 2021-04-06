<template>
  <h2>Almost finished</h2>
  <div class="box" :key="machine.id" v-for="machine in almostFinishedMachines">
    <MachineCard :machine="machine"/>
  </div>
  <h2>Active</h2>
  <div class="box" :key="machine.id" v-for="machine in activeMachines">
    <MachineCard :machine="machine"/>
  </div>
</template>

<script>
import MachineCard from './machinecard'

export default {
  name: 'MachineCards',
  components: {
    MachineCard
  },
  props: {
    machines: Array
  },
  computed: {
    almostFinishedMachines: function () {
      return this.machines.filter(function (u) {
        return u.progress > 90
      })
    },
    activeMachines: function () {
      return this.machines.filter(function (u) {
        return u.progress < 90
      })
    }
  }
}
</script>

<style scoped>
.box {
  width: 50%;
  max-width: 250px;
  display: inline-block;
  vertical-align:top;
}
</style>