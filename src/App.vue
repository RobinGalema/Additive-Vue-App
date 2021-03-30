<template>
  <router-view>

  </router-view>
  <Navigation :notification="91" />
</template>

<script>
import Navigation from "@/components/Global/Navigation";
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
<style>
@import url("https://use.typekit.net/cfk8vri.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
