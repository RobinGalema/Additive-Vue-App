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

  <div class="AddNewJob" @click="show = !show">
    <img src="~@/assets/icons/plus.svg" id="plusicon" />
  </div>

  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <span class="CardTitle">New Job</span>
      <div class="CloseX" @click="show = !show"></div>
      <div class="Content">
        <ShortInput inputTitle="Order Number:" inputPlaceholder="PO-123456AB" />
        <p>Customer:</p><Select optieEen="Select Customer" optieTwee="Select Customer" optieDrie="Select Customer" style="width:100%" />
        <p>File:</p><Select optieEen="Select Pre-made File" optieTwee="Select Pre-made File" optieDrie="Select Pre-made File" style="width:100%" />
        <p>Priority:</p><Select optieEen="Select Priority" optieTwee="Select Priority" optieDrie="Select Priority" style="width:100%" />
        <p>Printer:</p><Select optieEen="Select Printer" optieTwee="Select Printer" optieDrie="Select Printer" style="width:100%" />
        <RichInput textareaTitle="Title" textareaPlaceholder="Placeholder" />
        <GlobalButton :version="'secondary'" :text="'Quit'" :width="'45%'" style="margin-right:10%;margin-top:8%;" @click="show = !show"/>
        <GlobalButton :version="'primary'" :text="'Add Job'" :width="'45%'" @click="show = !show"/>
      </div>
    </div>
  </transition>
</template>

<script>
import GlobalButton from "@/components/Global/GlobalButton";
import ShortInput from "@/components/Global/ShortInput";
import RichInput from "@/components/Global/RichInput";
import Select from "@/components/Global/Select";
import DatePicker from "@/components/Global/DatePicker";

export default {
  name: "Calendar",
  components: {
    GlobalButton,
    ShortInput,
    RichInput,
    Select,
    DatePicker,
  },
    data: function() {
    return {
      show: false,
    };
  },
};
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
  margin-top: -20px;
}
.datesContainer::-webkit-scrollbar {
  display: none;
}
.datesContainer {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Overlay CSS */
.Blurredbackground {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
}
.Overlay {
  height: 700px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -5px 10px #0000001f;
}
.CardTitle {
  font-size: 34px;
  color: #151539;
  text-align: left;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
  margin-left: 20px;
  line-height: 2;
}
.CloseX {
  height: 40px;
  width: 40px;
  background-image: url("~@/assets/icons/x.svg");
  background-size: contain;
  float: right;
  margin: 15px;
}

.Content {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
p {
  font-size: 14px;
}

.fade-out-enter-active {
  animation: fade 0.5s;
}
.fade-out-leave-active {
  animation: fade 0.5s reverse;
}

.slide-fade-enter-active {
  animation: bounce-in 1s reverse;
}
.slide-fade-leave-active {
  animation: bounce-in 1s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes bounce-in {
  0% {
    bottom: 0%;
  }
  100% {
    bottom: -100%;
  }
}
/* End Overlay CSS */
</style>
