<template>
  <h1>History</h1>
  <div class="InputWrappers">
    <Search class="SearchBar" />
    <DatePicker class="DatePicker" />
  </div>
  <HistoryContainer machinename="Machine 1" />
  <HistoryContainer machinename="Machine 2" />
  <HistoryContainer machinename="Machine 3" />
  <HistoryContainer machinename="Machine 4" />
  <HistoryContainer machinename="Machine 5" />
  <HistoryContainer machinename="Machine 6" />
  <HistoryContainer machinename="Machine 7" />
  <HistoryContainer machinename="Machine 8" />
</template>

<script>
import Search from "@/components/Global/Search";
import DatePicker from "@/components/Global/DatePicker";
import HistoryContainer from "@/components/History/HistoryContainer";

export default {
  name: "History",
  components: {
    Search,
    DatePicker,
    HistoryContainer,
  }
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
