<template>
<img @click="show = !show" class="filterIcon" src="../../assets/icons/filter.png">
  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <h2>Urgency</h2>
      <div class="checkboxGrid">
        <div class="checkbox">
        <input type="checkbox">
        <label for="general">General</label><br>
      </div>

      <div class="checkbox">
        <input type="checkbox">
        <label for="warnings">Warnings</label><br>
      </div>

      <div class="checkbox">
        <input type="checkbox">
        <label for="critical">Critical</label><br>
      </div>
      </div>
      



      <h2>Machines</h2>
      <div class="checkboxGrid">
        <div class="checkbox">
            <input type="checkbox">
            <label for="machine1">Machine 1</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine2">Machine 2</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine3">Machine 3</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine4">Machine 4</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine5">Machine 5</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine6">Machine 6</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine7">Machine 7</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine8">Machine 8</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine9">Machine 9</label><br>
        </div>

        <div class="checkbox">
            <input type="checkbox">
            <label for="machine10">Machine 10</label><br>
        </div>
      </div>
      
      
    <GlobalButton @click="show = !show" style="width:100%; margin:0; margin-top:64px" text="Save changes" version="primary"/>

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
.filterIcon {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
}

.checkboxGrid {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
}

</style>
