<template>
  <h1>History</h1>
  <div class="InputWrappers">
    <Search class="SearchBar" />
    <DatePicker class="DatePicker" />
  </div>
  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 1"
  />
  <div v-if="showContent">
    <HistoryCard corename="QB021_NE_3" amcorenumber="3" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="QB021_NE_1" amcorenumber="1" status="Finished" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="QB021_NE_2" amcorenumber="2" status="Finished" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>
    <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 2"
  />
  <div v-if="showContent">
    <HistoryCard corename="DSA01_SP_1_1" amcorenumber="1" status="Finished" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="DSA01_SP_1_2" amcorenumber="2" status="Finished" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="DSA01_SP_1_3" amcorenumber="3" status="Finished" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>
    <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 3"
  />
  <div v-if="showContent">
    <HistoryCard corename="VR762_LK_1" amcorenumber="1" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="VR762_LK_2" amcorenumber="2" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="VR762_LK_3" amcorenumber="3" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>

  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 4"
  />
  <div v-if="showContent">
  </div>

  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 5"
  />
  <div v-if="showContent">
    <HistoryCard corename="VR762_LK_1" amcorenumber="1" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
    <HistoryCard corename="VR762_LK_3" amcorenumber="3" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>

  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 6"
  />
  <div v-if="showContent">
    <HistoryCard corename="VR762_LK_3" amcorenumber="3" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>

  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 7"
  />
  <div v-if="showContent">
    <HistoryCard corename="VR762_LK_1" amcorenumber="1" status="Waiting" client="Name" starttime="23/3 - 13:27" endtime="25/3 - 18:00" duration="54h" />
  </div>

  <Dropdown
    @show-dropdown-content="showDropdownContent"
    dropdownTitle="Machine 8"
  />
  <div v-if="showContent">
  </div>
</template>

<script>
import Search from "@/components/Global/Search";
import DatePicker from "@/components/Global/DatePicker";
import Dropdown from "@/components/Global/Dropdown";
import HistoryCard from "@/components/History/HistoryCard";

export default {
  name: "History",
  data() {
    return {
      showContent: true, // de content van de dropdown is nog leeg
    };
  },
  components: {
    Search,
    DatePicker,
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

<style scoped>
.InputWrappers {
  height: 50px;
  width: 100%;
}
.SearchBar {
  float: left;
}
.DatePicker {
  float: right;
  margin-top: 5px;
  height: 22px;
  box-shadow: 0px 0px 10px #0000001f;
}
</style>
