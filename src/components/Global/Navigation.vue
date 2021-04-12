<template>
  <div class="bottomnavigation">
    <nav>
      <router-link :class="[$route.name == 'Home' ? 'active' : '', 'tab']" to="/">
        <img src="@/assets/icons/icon-home_128x128.png"/>
      </router-link>
      <router-link :class="[$route.name == 'Machines' ? 'active' : '', 'tab']" to="/machines">
        <img src="@/assets/icons/icon-printer_128x128.png"/>
      </router-link>
      <router-link :class="[$route.name == 'Calendar' ? 'active' : '', 'tab']" to="/calendar">
        <img src="@/assets/icons/icon-calendar_128x128.png"/>
      </router-link>
      <router-link :class="[$route.name == 'History' ? 'active' : '', 'tab']" to="/history">
        <img src="@/assets/icons/icon-archive_128x128.png"/>
      </router-link>
      <router-link :class="[$route.name == 'Notifications' ? 'active' : '', 'tab']" to="/notifications">
        <div v-if="notification > 0" class="notification" >
          <p>{{notification}}</p>
        </div>
        <img src="@/assets/icons/icon-bell_128x128.png"/>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    notification: Number,
    currentPage: String
  }
}
</script>

<style scoped>
.bottomnavigation {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(21,21,57);
  padding: 15px 10px;
  padding-bottom: 34px;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
}

.bottomnavigation nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 500px;
  margin: 0px auto;
}

.tab {
  flex-basis: 20%;
  position: relative;
}

.tab:after {
  content: " ";
  position: absolute;
  display: block;
  background: rgba(255,255,255,0.0);
  height: 0px;
  width: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  border-radius: 50%;
  transition: width .25s, height .25s, background .25s;
  transition-timing-function: ease-in-out;
}

.tab:hover:after {
  width: 100%;
  padding-bottom: 100%;
  background: rgba(255,255,255,0.15);
}

.tab.active:before {
  position: absolute;
  content: " ";
  display: block;
  background: #fff;
  height: 4px;
  width: 4px;
  right: 0px;
  left: 0px;
  bottom: -10px;
  margin: 0px auto;
  border-radius: 5px;
}

.tab img {
  height: 24px;
  display: block;
  margin: 0 auto;
}

.tab .notification {
  position: absolute;
  right: 10px;
  left: 10px;
  margin: 0px auto;
  width: 15px;
  font-size: 13px;
  height: 15px;
  transform: translate(9px, -10px);
  border-radius: 50%;
  border: 3px solid rgb(21,21,57);
  background-color: #fff;
}

.tab .notification p {
  position: absolute;
  text-align: center;
  right: 0px;
  top: 1px;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  padding: 0px;
  font-size: 11px;
  font-weight: bold;
  color: rgb(21,21,57);
}
</style>