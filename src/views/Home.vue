<template>
  <h1>Home</h1>
  <a href="/machines">Go to machines</a>
  <ToggleCard />
  <Dropdown />
</template>

<script>

import ToggleCard from "../components/Global/ToggleCard.vue"
import Dropdown from "../components/Global/Dropdown.vue"

export default {
  name: 'Home',
  components:{
    ToggleCard,
    Dropdown,
  } 
}
</script>