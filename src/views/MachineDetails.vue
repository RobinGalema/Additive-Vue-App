<template>
  <a @click="$router.push('/machines')"
    ><img src="~@/assets/icons/left-arrow.svg" id="ReturnArrow"
  /></a>
  <h1>Machine {{ $route.params.printerId }}</h1>
  <MachinePreview />
  <MachineCurrent />
  <MachineInfo />
  <MachineJobs />
  <MachineErrors />
  <div class="printreport">
    <GlobalButton text="Print report" width="100%" />
  </div>
</template>

<script>
import MachinePreview from "@/components/Machines/machinepreview";
import MachineJobs from "@/components/Machines/MachineJobs";
import MachineInfo from "@/components/Machines/MachineInfo";
import MachineCurrent from "@/components/Machines/MachineCurrent";
import MachineErrors from "@/components/Machines/MachineErrors";
import GlobalButton from "@/components/Global/GlobalButton";

export default {
  name: "MachineDetails",
  components: {
    MachinePreview,
    MachineJobs,
    MachineInfo,
    MachineCurrent,
    MachineErrors,
    GlobalButton,
  },
};
</script>
<style scoped>
.printreport form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
a {
  float: left;
}
h1 {
  line-height: 2;
}
#ReturnArrow {
  height: 100%;
  width: 30px;
  margin-left: 10px;
  margin-top: 18px;
  margin-right: 15px;
}


</style>
