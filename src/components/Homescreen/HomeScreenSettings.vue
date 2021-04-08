<template>
<img @click="show = !show" class="settingsIcon" src="../../assets/icons/settings.svg">
  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <h2>{{ title }}</h2>
        <div class="content">
            <img class="logo" src="../../assets/ai-logo.png">
            <p>Selet your function:</p> <Select optieEen="Operator" optieTwee="Company Lead" optieDrie="Project Manager" style="width:100%" /> <br>

             <p>Out of app notifications:</p>
                 <div class="toggleButton">General:
                    <ToggleButton/> 
                </div>
                <div class="toggleButton">Warnings:
                    <ToggleButton/> 
                </div>
                <div class="toggleButton">Errors:
                    <ToggleButton/> 
                </div>
                <GlobalButton @click="show = !show" style="width:100%; margin:0; margin-top:64px" text="Save changes" version="primary"/>

        </div>
    </div>
  </transition>
</template>

<script>
import GlobalButton from "@/components/Global/GlobalButton.vue"
import Select from "@/components/Global/Select.vue"
import ToggleButton from "@/components/Global/ToggleButton.vue"

export default {
  name: "HomeScreenSettings",
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
.Blurredbackground {
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
}
.Overlay {
  height: 700px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #F8F8F8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px -5px 10px #0000001f;
  
}

h2{
    font-size: 32px;
  color: #000000;
  font-family: frank-new, sans-serif;
  font-weight: 700;
  font-style: normal;
    margin: 0;
    padding-top: 5px;
    border-top-left-radius: 10pt;
    border-top-right-radius: 10pt;
    border-bottom-left-radius: 6pt;
    border-bottom-right-radius: 6pt;
    background: white;
    box-shadow: 0 0 10px #00000029;
    text-align: center;
    padding: 4px;
}

.fade-out-enter-active {
  animation: fade 0.4s;
}
.fade-out-leave-active {
  animation: fade 0.4s reverse;
}

.slide-fade-enter-active {
  animation: bounce-in 0.8s reverse;
}
.slide-fade-leave-active {
  animation: bounce-in 0.8s;
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

.content{
    padding: 16px;
}

p{
    color: #000000;
    font-weight: bold;
}

.toggleButton{
    display: flex;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;
    }

    .logo{
        display: block;
        margin: 0 auto;
        width: 40%;
        padding: 32px;
    }
</style>
