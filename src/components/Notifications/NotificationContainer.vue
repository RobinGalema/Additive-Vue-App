<template>
  <div class="NotificationContainer">
    <Dropdown
      @show-dropdown-content="showDropdownContent"
      v-bind:dropdownTitle="machinename"
    />
    <div v-if="showContent">
      <NotificationCard
        machine="1"
        title="Fatal Error"
        context="Stopped because a fatal error occurred!"
        minutes="20"
        linkToMachine=""
        level="high"
      />
      <NotificationCard
        machine="1"
        title="Low powder level"
        context="Machine 1's powder supply is almost empty."
        minutes="25"
        linkToMachine=""
        level="medium"
      />
      <NotificationCard
        machine="1"
        title="Check Powder Suppply"
        context="The powder basin is halfway empty."
        minutes="30"
        linkToMachine=""
        level="low"
      />
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Global/Dropdown";
import NotificationCard from "@/components/Notifications/NotificationCard";

export default {
  name: "NotificationContainer",
  data() {
    return {
      showContent: true, // de content van de dropdown is nog leeg
    };
  },
  props: {
    machinename: String,
  },
  components: {
    Dropdown,
    NotificationCard,
  },
  methods: {
    showDropdownContent() {
      this.showContent = !this.showContent; //functie die de content van de dropdown laat zien en verbergt
    },
  },
};
</script>

<style scoped></style>
