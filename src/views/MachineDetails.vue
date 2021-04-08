<template>
  <h1>Machine 1</h1>
  <MachinePreview />
  <div class="currentjob box">
    <h4>Current job</h4>
    <div class="currentjobGrid">
        <div class="itemTitle">Name</div>
        <div class="itemData">QB021_NE_3</div>

        <div class="itemTitle">Status</div>
        <div class="itemData">Waiting</div>

        <div class="itemTitle">Status</div>
        <div class="itemData">Waiting</div>

        <div class="itemTitle">AM Core</div>
        <div class="itemData">3</div>
        
        <div class="itemTitle">Job started on</div>
        <div class="itemData">23/03/2021 13:27</div>

        <div class="itemTitle">Estimated manufacturing finish</div>
        <div class="itemData">25/03/2021 18:00</div>
    </div>
  </div>
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
  <div class="errors box">
    <h4>Errors (0)</h4>
  </div>

  <div class="printreport">
    <GlobalButton text="Print report" width="75%"/>
  </div>

  
</template>

<script>
import GlobalButton from '../components/Global/GlobalButton'
import MachinePreview from '../components/Machines/machinepreview'

export default {
  name: 'MachineDetails',
  components: {
    MachinePreview,
    GlobalButton
  }
}
</script>

<style scoped>
.box {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.15);
}

.box h4 {
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-bottom: 10px;
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
  color: rgb(170,170,170);
}

.jobs table tr:hover {
  background-color: rgb(245,245,245);
}

.btn-small {
  font-size: 13px;
  padding: 5px 10px;
}

.errors.box {
  margin-bottom: 30px;
}

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
