<template>
  <div class="select">
    <select>
      <option>{{optieEen}}</option>
      <option>{{optieTwee}}</option>
      <option>{{optieDrie}}</option>
    </select>
    <img src="~@/assets/icons/chevron-down.svg" class="selectarrow" />
  </div>
</template>

<script>
export default {
  name: "Select",
  props:{
   optieEen: {
        type: String,
        default: "First select",
      },
      optieTwee: {
        type: String,
        default: "Second select",
      },
      optieDrie: {
        type: String,
        default: "Third select",
      }
  },
  data: function() {
    return {
      selected: "",
      Title:"shit",
    };
  },
};
</script>

<style scoped>
.select {
  position: relative;
  margin: 0;
  /* padding-top: 5px;
  padding-bottom: 5px; */
  width: 250px;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #00000029;
}
.select select {
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 15px 15px;
  outline: 0;
  border: 0;
  border-radius: 10px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: open-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
}

.selectarrow {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  pointer-events: none;
}
</style>
