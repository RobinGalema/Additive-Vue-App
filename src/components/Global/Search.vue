<template>
  <div id="input_container">
    <input type="text" id="input" placeholder="Search" />
    <img src="~@/assets/icons/search.svg" id="input_img" />
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
#input_container {
  position: relative;
  width: 200px;
  padding: 5px;
}
#input {
  height: 40px;
  margin: 0;
  padding-left: 50px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #0000001f;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
}
#input_img {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
}
</style>
