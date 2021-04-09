<template>
    <img @click="show = !show" class="filterIcon" src="../../assets/icons/filter.png">
    <transition name="fade-out">
        <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
    </transition>

    <transition name="slide-fade">
        <div class="Overlay" v-if="show">
            <h2>Urgency</h2>

            <div class="checkboxGrid">
                <label class="filterItem">General
                    <input type="checkbox">
                    <span class="checkmark blue"></span>
                </label>

                <label class="filterItem">Warning
                    <input type="checkbox">
                    <span class="checkmark yellow"></span>
                </label>

                <label class="filterItem">Critical
                    <input type="checkbox">
                    <span class="checkmark red"></span>
                </label>
            </div>
    
            <h2>Machines</h2>

            <div class="checkboxGrid">
                <label class="filterItem">Machine 1
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 2
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 3
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 4
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 5
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 6
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 7
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 8
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 9
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>

                <label class="filterItem">Machine 10
                    <input type="checkbox">
                    <span class="checkmark primary"></span>
                </label>
            </div>
            <div class="filterOptions">
              <GlobalButton @click="show = !show" width="100%" text="Quit" version="secondary"/>  
              <GlobalButton @click="show = !show" width="100%" text="Apply" version="primary"/>
            </div>
            
        </div>
    </transition>
</template>

<script>
import GlobalButton from "@/components/Global/GlobalButton.vue"
import Select from "@/components/Global/Select.vue"
import ToggleButton from "@/components/Global/ToggleButton.vue"

export default {
  name: "NotificationsFilter",
  data: function() {
    return {
      show: false,
    };
  },
  props: {
    title: String,
  },
  components:{
      GlobalButton,
      Select,
      ToggleButton
  }
};
</script>

<style scoped>
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

.filterOptions{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.filterOptions form {
  display: flex;
  align-items: center;
}

</style>
