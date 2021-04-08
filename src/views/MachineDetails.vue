<template>
  <h1>Machine {{ $route.params.printerId }}</h1>
  <MachinePreview />
  <MachineCurrent />
  <MachineJobs />
  <MachineErrors />
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
