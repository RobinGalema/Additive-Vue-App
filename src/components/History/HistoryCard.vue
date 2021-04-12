<template>
  <div class="HistoryCardContainer">
    <div class="CoreName">{{ corename }}</div>
    <div class="InfoWrapper">
      <div class="InfoLeft1">
        <div class="InfoText">AM Core:</div>
        <div class="InfoText">Status:</div>
        <div class="InfoText">Client:</div>
      </div>
      <div class="InfoLeft2">
        <div class="InfoItem">{{ amcorenumber }}</div>
        <div class="InfoItem">{{ status }}</div>
        <div class="InfoItem">{{ client }}</div>
      </div>
      <div class="InfoRight1">
        <div class="InfoText">Start Time:</div>
        <div class="InfoText">End Time:</div>
        <div class="InfoText">Duration:</div>
      </div>
      <div class="InfoRight2">
        <div class="InfoItem">{{ starttime }}</div>
        <div class="InfoItem">{{ endtime }}</div>
        <div class="InfoItem">{{ duration }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryCard",
  props: {
    corename: String,
    amcorenumber: String,
    status: String,
    client: String,
    starttime: String,
    endtime: String,
    duration: String,
  },
};
</script>

<style scoped>
.HistoryCardContainer {
  height: auto;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 15px;
}
.InfoWrapper {
  display: flex;
  align-items: center;
  font-family: frank-new, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 12px;
}
.InfoLeft1 {
  width: 25%;
}
.InfoLeft2 {
  width: 25%;
  padding-right: 2%;
}
.InfoRight1 {
  width: 23%;
}
.InfoRight2 {
  width: 28%;
}
.CoreName {
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  font-size: 16px;
  padding-bottom: 10px;
}
.InfoText {
  padding-bottom: 5px;
  color: #949494;
  width: 80%;
  float: left;
}
.InfoItem {
  padding-bottom: 5px;
  width: 80%;
  text-align: left;
  float: left;
}
</style>
