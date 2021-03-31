<template>
  <h1>Home</h1>
  <a href="/machines">Go to machines</a>
  <ToggleCard />
</template>

<script>

import ToggleCard from "../components/Global/ToggleCard.vue"

export default {
  name: 'Home',
  components:{
    ToggleCard,
  } 
}
</script>