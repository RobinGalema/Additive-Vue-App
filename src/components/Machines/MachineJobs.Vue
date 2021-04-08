<template>
  <div class="jobs box">
    <h4>Jobs</h4>
    <table>
      <tr>
        <td>
          <GlobalButton :version="'btn-small'" :text="'AM Core 1'" />
        </td>
        <td>RN098_NE_3_4</td>
        <td>Queued</td>
      </tr>
      <tr>
        <td>
          <GlobalButton :version="'btn-small'" :text="'AM Core 2'" />
        </td>
        <td>Idle</td>
        <td></td>
      </tr>
      <tr>
        <td>
          <GlobalButton :version="'btn-small'" :text="'AM Core 3'" />
        </td>
        <td>RN098_NE_3_4</td>
        <td>4h 17m remaining</td>
      </tr>
      <tr>
        <td>
          <GlobalButton :version="'btn-small'" :text="'AM Core 4'" />
        </td>
        <td>Idle</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
import GlobalButton from "@/components/Global/GlobalButton";

export default {
  name: "MachineJobs",
  components: {
    GlobalButton,
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

table {
  border-collapse: collapse;
}

.jobs table td:nth-child(1) {
  color: rgb(170, 170, 170);
}

.jobs table tr:hover {
  background-color: rgb(245, 245, 245);
}

.btn-small {
  font-size: 13px;
  padding: 5px 10px;
}
</style>
