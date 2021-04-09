<template>
  <div class="topSection">
    <h1>Notifications</h1>
    <img
      @click="show = !show"
      class="filterIcon"
      src="@/assets/icons/filter.png"
    />
    <NotificationFilterTags />
  </div>
  <NotificationContainer machinename="Machine 1" />
  <NotificationContainer machinename="Machine 2" />
  <NotificationContainer machinename="Machine 3" />
  <NotificationContainer machinename="Machine 4" />
  <NotificationContainer machinename="Machine 5" />
  <NotificationContainer machinename="Machine 6" />
  <NotificationContainer machinename="Machine 7" />
  <NotificationContainer machinename="Machine 8" />

  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <span class="CardTitle">Filter</span>
      <div class="CloseX" @click="show = !show"></div>
      <div class="Content">
        <h2>Urgency</h2>
        <div class="checkboxGrid">
          <label class="filterItem"
            >General
            <input type="checkbox" />
            <span class="checkmark blue"></span>
          </label>

          <label class="filterItem"
            >Warning
            <input type="checkbox" />
            <span class="checkmark yellow"></span>
          </label>

          <label class="filterItem"
            >Critical
            <input type="checkbox" />
            <span class="checkmark red"></span>
          </label>
        </div>

        <h2>Machines</h2>

        <div class="checkboxGrid">
          <label class="filterItem"
            >Machine 1
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 2
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 3
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 4
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 5
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 6
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 7
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 8
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 9
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>

          <label class="filterItem"
            >Machine 10
            <input type="checkbox" />
            <span class="checkmark primary"></span>
          </label>
        </div>
        <GlobalButton :version="'secondary'" :text="'Quit'" :width="'45%'" @click="show = !show"/>
        <div style="display: inline-table;width: 10%;"></div>
        <GlobalButton :version="'primary'" :text="'Add Job'" :width="'45%'" @click="show = !show"/>
      </div>
    </div>
  </transition>
</template>

<script>
import NotificationContainer from "../components/Notifications/NotificationContainer";
import NotificationFilterTags from "../components/Notifications/NotificationFilterTags";

import GlobalButton from "../components/Global/GlobalButton";

export default {
  name: "Notifications",

  components: {
    NotificationFilterTags,
    NotificationContainer,
    GlobalButton,
  },
  data: function() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
.topSection {
  display: unset;
}

/* Overlay CSS */
.Blurredbackground {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
}
.Overlay {
  height: 700px;
  width: 100%;
  position: fixed;
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

h2 {
  color: #5268aa;
}
.filterIcon {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 30px;
}

.checkboxGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 30px;
  margin-bottom: 32px;
}

input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.filterItem {
  position: relative;
  padding-left: 35px;
  height: 25px;
  display: flex;
  align-items: center;
}

.filterItem input:checked ~ .checkmark.blue {
  background-color: #1ea7fd;
}

.filterItem input:checked ~ .checkmark.yellow {
  background-color: #fcc517;
}

.filterItem input:checked ~ .checkmark.red {
  background-color: #eb6060;
}

.filterItem input:checked ~ .checkmark.primary {
  background-color: #5268aa;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.filterItem input:checked ~ .checkmark:after {
  display: block;
}

.filterItem .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
}
/* End Overlay CSS */
</style>
