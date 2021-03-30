<template>
<GlobalButton text="hoi" version="secondary" width="200px" />
  <router-view>
    
  </router-view>
</template>

<script>
import  GlobalButton from './components/Global/GlobalButton'

export default {
  name: 'App',
  components: {
    GlobalButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
