<template>
  <router-view>
    <NotificationCard title="Machine stopped" context="Machine 1 stopped because a fatal error occurred." alert="high" />
  </router-view>
  <Navigation :notification="91" />
</template>

<script>
import Navigation from "@/components/Global/Navigation";
import NotificationCard from "./components/Notifications/NotificationCard";
export default {
  name: 'App',
  components: {
    Navigation,
    NotificationCard,
  }
}
</script>
<style>
@import url("https://use.typekit.net/cfk8vri.css");

#app {
  font-family: frank-new, sans-serif;
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