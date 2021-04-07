<template>
  <transition name="fade-out">
    <div class="Blurredbackground" @click="show = !show" v-if="show"></div>
  </transition>
  <transition name="slide-fade">
    <div class="Overlay" v-if="show">
      <span class="CardTitle">{{ title }}</span>
      <div class="CloseX" @click="show = !show"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SlideOutOverlay",
  data: function() {
    return {
      show: true,
    };
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
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
  height: 600px;
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
</style>
