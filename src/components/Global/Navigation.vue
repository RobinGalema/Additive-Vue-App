<template>
  <div class="bottomnavigation">
    <nav>
      <a class="tab active" href="#">
        <img src="@/assets/icons/icon-home_128x128.png"/>
      </a>
      <a class="tab" href="#">
        <img src="@/assets/icons/icon-printer_128x128.png"/>
      </a>
      <a class="tab" href="#">
        <img src="@/assets/icons/icon-calendar_128x128.png"/>
      </a>
      <a class="tab" href="#">
        <img src="@/assets/icons/icon-archive_128x128.png"/>
      </a>
      <a class="tab" href="#">
        <div class="notification">
          <p>46</p>
        </div>
        <img src="@/assets/icons/icon-bell_128x128.png"/>
      </a>
    </nav>
  </div>
</template>

<style scoped>
.bottomnavigation {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgb(21,21,57);
  padding: 15px 10px;
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
  bottom: -5px;
  margin: 0px auto;
  border-radius: 5px;
}

.tab img {
  height: 24px
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