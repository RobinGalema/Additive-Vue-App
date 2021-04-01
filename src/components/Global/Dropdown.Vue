<template>
 <!-- Component:     <Dropdown dropdownTitle="Title" />    ------->
    <div class="dropdownBackground">
        <div @click="show = !show, onClick()" class="topRow"> <!-- als je op de topRow klikt veranderdt show naar het tegenovergestelde waarde -->
                <h2>{{dropdownTitle}}</h2>
                <img :class="[show ? 'spinArrow' : '', 'icon']" src="../../assets/icons/chevron-down.svg"><!-- als "show" true is dan krijgt de div de "spinArrow" class, zo niet, dan krijgt die geen class.-->  
        </div>
    </div>

</template>

<script>
export default {
    name: "Dropdown",
    props:{
         dropdownTitle: String,
         dropdownContent: String,
    },
     data(){
        return{
            show: false,
        }
    },
    methods:{
        onClick(){
            console.log("geklikt!!!")
            this.$emit("show-dropdown-content") // dit wordt doorgestuurd naar de file waar je de component aanmaakt door>> @show-dropdown-content="showDropdownContent"
        }
    }
}
</script>

<style scoped>

.dropdownBackground{
        text-align: left;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100%;
}

 .topRow{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .topRow > h2{
        margin-top: 12px;
        margin-bottom: 12px;
        color: #5268AA;
    }

    .spinArrow{
         transform: rotate(180deg);
         transition: 0.4s;
    }

    .dropdownContent{
        margin-left: 2px;
    }

    img{
        transition: 0.4s; /*-- dit zorgt voor de animatie wanneer de arrow terugdraait */
        filter: invert(36%) sepia(100%) saturate(288%) hue-rotate(188deg) brightness(92%) contrast(93%);
    }

</style>


<!------------ Plaats dit in de file waar je de component wil gebruiken -------------

<template>
  <h1>Home</h1>
  <a href="/machines">Go to machines</a>
  <Dropdown @show-dropdown-content="showDropdownContent" dropdownTitle="Test"/> 
  <div v-if="showContent">
                <ToggleCard cardTitle="Title" />
  </div>
</template>

<script>

import Dropdown from "../components/Global/Dropdown.vue"
import ToggleCard from "@/components/Global/ToggleCard.vue"

export default {
  name: 'Home',
  data(){
    return{
      showContent: false // de content van de dropdown is nog leeg
    }
  },
  components:{
    Dropdown,
    ToggleCard
  },
  methods:{
    showDropdownContent(){
      this.showContent = !this.showContent; //functie die de content van de dropdown laat zien en verbergt
    }
  }
}
</script>


-->