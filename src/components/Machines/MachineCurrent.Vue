<template>
  <div class="currentjob box">
    <h4>Current job</h4>
    <table>
      <tr>
        <td>Name</td>
        <td>QB021_NE_3</td>
      </tr>
      <tr>
        <td>Status</td>
        <td>Waiting</td>
      </tr>
      <tr>
        <td>AM Core</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Job started on</td>
        <td>23/03/2021 13:27</td>
      </tr>
      <tr>
        <td>Estimated manufacturing finish</td>
        <td>25/03/2021 18:00</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MachineCurrent",
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
