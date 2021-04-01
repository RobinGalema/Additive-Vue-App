<template>
  <div class="topSection">
    <h1>Overview</h1>
    <img src="../assets/icons/settings.svg">
  </div>
  <h4 class="date">{{date}}</h4>

  <div class="firstRow">
    <HomeScreenDiagram />
    <PlanNewJobButton text="Plan new job" version="homeScreenButton"  picture_src="../assets/logo.png"/>
  </div>

  <HomeScreenRunning />
    <HomeScreenNotifications />

</template>

<script>
  import HomeScreenDiagram from "@/components/Homescreen/HomeScreenDiagram.vue"
  import PlanNewJobButton from "@/components/Global/GlobalButton.vue"
  import HomeScreenRunning from "@/components/Homescreen/HomeScreenRunning.vue"
  import HomeScreenNotifications from "@/components/Homescreen/HomeScreenNotifications.vue"
  export default {
    name: 'Home',
    data(){
      return{
        date: "",
      }
    },
    components:{
      HomeScreenDiagram,
      PlanNewJobButton,
      HomeScreenRunning,
      HomeScreenNotifications
    },
    methods:{
      getCurrentDate: function () {
          var currentDate = new Date();
          const day = currentDate.toLocaleString('en', { weekday: 'short' });
          const month = currentDate.toLocaleString('en', { month: 'long' });
          const fullDate = day + ". " + month + " " + currentDate.getDate();
          this.date = fullDate;
        }
    },
    mounted() { //wordt uitgevoerd onload
        this.getCurrentDate()
    }
  }

</script>

<style>

.topSection{
  display: flex;
  justify-content: space-between;
}

h1{
  margin: 0px;
  color: #000000;
}

.date{
  margin-top: 0px;
  margin-left: 4px;
  color: #BBBBBB;
  text-transform: uppercase;
}

.firstRow{
  display: grid;
  grid-template-columns: 70% 30%;
}


</style>