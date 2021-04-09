<template>
  <div class="NotificationContainer">
    <Dropdown
      @show-dropdown-content="showDropdownContent"
      v-bind:dropdownTitle="machinename"
    />
    <div v-if="showContent">
      <NotificationCard
        title="Machine stopped"
        context="Machine 1 stopped because a fatal error occurred"
        minutes="20"
        linkToMachine=""
        level="high"
      />
      <NotificationCard
        title="Machine stopped"
        context="Machine 1 stopped because a fatal error occurred"
        minutes="20"
        linkToMachine=""
        level="high"
      />
      <NotificationCard
        title="Machine stopped"
        context="Machine 1 stopped because a fatal error occurred"
        minutes="20"
        linkToMachine=""
        level="high"
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
