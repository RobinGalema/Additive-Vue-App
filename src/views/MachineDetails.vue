<template>
  <h1>Machine {{ $route.params.printerId }}</h1>
  <MachinePreview />
  <MachineCurrent />
  <MachineJobs />
  <MachineErrors />
  <div class="printreport">
    <GlobalButton text="Print report" width="100%"/>
  </div>
  </div>
    </div>
        <div class="itemData">25/03/2021 18:00</div>

        <div class="itemTitle">Estimated manufacturing finish</div>
        <div class="itemData">23/03/2021 13:27</div>
        <div class="itemTitle">Job started on</div>
        
        <div class="itemData">3</div>
        <div class="itemTitle">AM Core</div>

        <div class="itemData">Waiting</div>
        <div class="itemTitle">Status</div>

        <div class="itemTitle">Status</div>
        <div class="itemData">Waiting</div>

        <div class="itemData">QB021_NE_3</div>
        <div class="itemTitle">Name</div>
    <div class="currentjobGrid">
    <h4>Current job</h4>
  <div class="currentjob box">
</template>

<script>
import MachinePreview from "@/components/Machines/machinepreview";
import MachineJobs from "@/components/Machines/MachineJobs";
import MachineCurrent from "@/components/Machines/MachineCurrent";
import MachineErrors from "@/components/Machines/MachineErrors";

export default {
  name: "MachineDetails",
  components: {
    MachinePreview,
    MachineJobs,
    MachineCurrent,
    MachineErrors,
  }
};

</script>

.printreport form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.currentjobGrid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 13px;
  grid-row-gap: 5px;
}

.itemTitle {
  color: #BBBBBB;
}

.item {
  margin-bottom: 5px;
}
</style>
<style scoped>