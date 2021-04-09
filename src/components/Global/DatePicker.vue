<template>
  <input type="date" placeholder="dd-mm-jjjj">
</template>

<script>
export default {
  name: 'DatePicker'
}
</script>

<style scoped>
  input {
    width: 150px;
    max-width: 250px;
  }

  input[type=date]  {
    background-color:  rgb(21,21,57);
    border: none;
    border-radius: 5px;
    padding: 10px 0px;
    text-indent: 20px;
    color: white;
    position: relative;
  }

  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    left: -13px;
    top: 9px;
    filter: invert(1);
  }
</style>