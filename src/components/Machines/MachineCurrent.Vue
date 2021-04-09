<template>
  <div class="currentjob box">
    <h4>Current job</h4>
    <div class="currentjobGrid">
        <div class="itemTitle">Name</div>
        <div class="itemData">QB021_NE_3</div>

        <div class="itemTitle">Status</div>
        <div class="itemData">Waiting</div>

        <div class="itemTitle">AM Core</div>
        <div class="itemData">3</div>
        
        <div class="itemTitle">Job started on</div>
        <div class="itemData">23/03/2021 13:27</div>

        <div class="itemTitle">Est. manufacturing finish</div>
        <div class="itemData">25/03/2021 18:00</div>
    </div>
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

.currentjobGrid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
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
