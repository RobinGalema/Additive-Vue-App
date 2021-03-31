<template>
  <Search /><br />
  <Select />
  <SlideOutOverlay title="Printer 1" />
</template>

<script>

import Search from "@/components/Global/Search.vue"
import Select from "@/components/Global/Select.vue"
import SlideOutOverlay from "@/components/Global/SlideOutOverlay.vue"

export default {
  name: 'Home',
  components:{
    Search,
    Select,
    SlideOutOverlay,
  } 
}
</script>