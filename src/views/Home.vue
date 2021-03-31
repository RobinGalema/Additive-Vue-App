<template>
  <h1>Home</h1>
  <a href="/machines">Go to machines</a>
  <div class="pt-15">
    <ToggleCard />
  </div>
  <div class="pt-15">
    <DatePicker id="datepicker" />
  </div>
</template>

<script>
import ToggleCard from "../components/Global/ToggleCard.vue"
import DatePicker from "../components/Global/DatePicker.vue"

export default {
  name: 'Home',
  components:{
    ToggleCard,
    DatePicker
  } 
}
</script>

<style>
.pt-15 {
  padding-top: 15px;
}
</style>