<template>
  <div class="HistoryContainer">
    <Dropdown
      @show-dropdown-content="showDropdownContent"
      v-bind:dropdownTitle="machinename"
    />
    <div v-if="showContent">
      <HistoryCard
        corename="QB021_NE_3"
        amcorenumber="3"
        status="Waiting"
        client="Name"
        starttime="23/3 - 13:27"
        endtime="25/3 - 18:00"
        duration="54h"
      />
      <HistoryCard
        corename="QB021_NE_1"
        amcorenumber="1"
        status="Finished"
        client="Name"
        starttime="23/3 - 13:27"
        endtime="25/3 - 18:00"
        duration="54h"
      />
      <HistoryCard
        corename="QB021_NE_2"
        amcorenumber="2"
        status="Finished"
        client="Name"
        starttime="23/3 - 13:27"
        endtime="25/3 - 18:00"
        duration="54h"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Global/Dropdown";
import HistoryCard from "@/components/History/HistoryCard";

export default {
  name: "HistoryContainer",
  data() {
    return {
      showContent: true, // de content van de dropdown is nog leeg
    };
  },
  props: {
    machinename: String
  },
  components: {
    Dropdown,
    HistoryCard,
  },
  methods: {
    showDropdownContent() {
      this.showContent = !this.showContent; //functie die de content van de dropdown laat zien en verbergt
    },
  },
};
</script>

<style scoped></style>
