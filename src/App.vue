<template>
  <router-view>
  </router-view>
  <SlideOutOverlay title="Printer 1" />
</template>

<script>
import SlideOutOverlay from "./components/Global/SlideOutOverlay";

export default {
  name: 'App',
  components: {
    SlideOutOverlay
  }
}
</script>
<style>
@import url("https://use.typekit.net/cfk8vri.css");

#app {
  font-family: open-sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

/*
--Frank New Regular--
font-family: frank-new, sans-serif;
font-weight: 400;
font-style: normal;

--Frank New Bold--
font-family: frank-new, sans-serif;
font-weight: 700;
font-style: normal;

--Open Sans Bold--
font-family: open-sans, sans-serif;
font-weight: 700;
font-style: normal;

--Open Sans Regular--
font-family: open-sans, sans-serif;
font-weight: 400;
font-style: normal;
*/
</style>
