<template>
  <div class="bottomnavigation">
    <nav>
      <a class="tab active" href="#">
        <img src="https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png">
      </a>
      <a class="tab" href="#">
        <img src="https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png">
      </a>
      <a class="tab" href="#">
        <img src="https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png">
      </a>
      <a class="tab" href="#">
        <img src="https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png">
      </a>
      <a class="tab" href="#">
        <img src="https://freepngimg.com/thumb/logo/62837-instagram-icons-photography-computer-logo-icon.png">
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
//background-color: rgb(21,21,57);
  background-color: rgb(200,200,200);
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
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
}

.tab.active:after {
  content: " ";
  display: block;
  background: #000;
  height: 4px;
  width: 4px;
  margin: -3px auto 0px auto;
  border-radius: 5px;
  margin-bottom: -29px;
}

.tab img {
  height: 30px
}
</style>