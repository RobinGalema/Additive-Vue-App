<template>
  <div class="Blurredbackground"></div>
  <div class="Overlay">
      <span class="CardTitle">{{ title }}</span>
      <div class="CloseX"></div>
  </div>
</template>

<script>
export default {
  name: "SlideOutOverlay",
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
    height: 100px;
    width: 100px;
    background-image: url('~@/assets/x.svg');
    background-size: contain;
}
</style>