<template>
  <h1>March 2021</h1>
  <div class="datesContainer">
    <img src="~@/assets/dates.png" id="input_img" />
  </div>
  <div class="printersContainer">
    Printer 1<br />
    Printer 2<br />
    Printer 3<br />
    Printer 4<br />
    Printer 5<br />
    Printer 6<br />
    Printer 7<br />
    Printer 8<br />
    Printer 9<br />
    Printer 10<br />
    Printer 11<br />
    Printer 12<br />
  </div>
  <div class="calendarContainer">
    <img src="~@/assets/calender.png" />
  </div>
  <div class="AddNewJob"><img src="~@/assets/icons/plus.svg" id="plusicon" /></div>
  <!--<SlideOutOverlay title="New Job" />-->
</template>

<script>
import SlideOutOverlay from "@/components/Global/SlideOutOverlay";

export default {
  name: 'Calendar',
    components: {
    SlideOutOverlay
  }
}
</script>

<style scoped>
h1 {
  margin: revert;
}

.AddNewJob {
  position: fixed;
  bottom: 90px;
  right: 15px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #151539;
  box-shadow: 0px -5px 10px #0000001f;
}
#plusicon {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
}

.datesContainer {
  height: auto;
  width: 100%;
  float: right;
  display: block;
  overflow: scroll;
  margin-top:-20px;
}
.datesContainer::-webkit-scrollbar {
  display: none;
}
.datesContainer {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.printersContainer {
  height: auto;
  width: 15%;
  float: left;
  display: block;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 11px;
  line-height: 4.2;
  padding-top: 40px;
  margin-left: -3px;
}

.calendarContainer {
  height: auto;
  width: 85%;
  float: right;
  display: block;
  overflow: scroll;
}
.calendarContainer::-webkit-scrollbar {
  display: none;
}
.calendarContainer {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
