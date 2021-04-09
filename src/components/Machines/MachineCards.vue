<template>
  <Dropdown @show-dropdown-content="showDropdownContent1" dropdownTitle="Nearly Finished" />
  <div v-if="showContent1">
    <div
      class="box"
      :key="machine.id"
      v-for="machine in almostFinishedMachines"
    >
      <MachineCard :machine="machine" />
    </div>
  </div>

  <Dropdown @show-dropdown-content="showDropdownContent2" dropdownTitle="Active" />
  <div v-if="showContent2">
    <div class="box" :key="machine.id" v-for="machine in activeMachines">
      <MachineCard :machine="machine" />
    </div>
  </div>
</template>
dd
<script>
import Dropdown from "@/components/Global/Dropdown.vue";
import MachineCard from "@/components/Machines/machinecard"

export default {
  name: "MachineCards",
  data() {
    return {
      showContent1: true,
      showContent2: true,
    };
  },
  components: {
    Dropdown,
    MachineCard,
  },
  props: {
    machines: Array,
  },
  methods: {
    showDropdownContent1() {
      this.showContent1 = !this.showContent1;
    },
    showDropdownContent2() {
      this.showContent2 = !this.showContent2;
    },
  },
  computed: {
    almostFinishedMachines: function() {
      return this.machines.filter(function(u) {
        return u.progress > 90;
      });
    },
    activeMachines: function() {
      return this.machines.filter(function(u) {
        return u.progress < 90;
      });
    },
  },
};
</script>

<style scoped>
.box {
  width: 50%;
  max-width: 250px;
  display: inline-block;
  vertical-align: top;
}
</style>
