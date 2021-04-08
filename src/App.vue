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
    Navigation,
  },
  mounted: async function () {
    if (Notification.permission == 'granted') {
      const reg = await navigator.serviceWorker.getRegistration();
      var options = {
        body: 'Machine 1 stopped because a fatal error occured',
        icon: '/img/additive-favicon-512x512.png',
        image: '/img/notificationimg_additive7.jpg',
        badge: '/img/additive-white-512x512.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {action: 'viewall', title: 'View all'},
          {action: 'checkmachine', title: 'Check machine'}
        ]
      };
      reg.showNotification('Machine stopped', options);
    } else {
      Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
      });
    }
  }
}
</script>
<style>
@import url("https://use.typekit.net/cfk8vri.css");

body {
  padding-bottom: 120px; /* preventing content being stuck below navigation at bottom of a page */
}

#app {
  font-family: frank-new, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 70px;
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