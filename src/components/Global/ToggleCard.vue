<template>
        <div @click="show = !show, onClick()" class="topRow"> <!-- als je op de topRow klikt veranderdt show naar het tegenovergestelde waarde -->
            <h4>{{cardTitle}}</h4>
            <img :class="[show ? 'spinArrow' : '']" src="../../assets/icons/chevron-down.svg"> <!-- als "show" true is dan krijgt de div de "spinArrow" class, zo niet, dan krijgt die geen class.-->  
        </div>
</template>


<script>
feather.replace();

export default {
    name: "ToggleCard",
    data(){
        return{
            show: false,
        }
    },
    props:{
        cardTitle: String
    },
    methods:{
        onClick(){
            console.log("geklikt!!!")
            this.$emit("show-card-content")
        },
    },
}

</script>

<style scoped>

    .topRow{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }

    .topRow > h4{
        margin-top: 12px;
        margin-bottom: 12px;
        color: #151539;
    }

    .cardContent{
        padding-bottom: 12px;
    }

    .spinArrow{
         transform: rotate(180deg);
         transition: 0.4s;
    }

    img{
        transition: 0.4s; /*-- dit zorgt voor de animatie wanneer de arrow terugdraait */
        color: #151539;
    }
</style>




<!----- Plaats dit in de file waar je de component wil gebruiken 

<template>
  <h1>Home</h1>
  <a href="/machines">Go to machines</a>
  <div class="cardContainer">
    <ToggleCard @show-card-content="showCardContent" cardTitle="Title" />
    <div v-if="showTheContent">
                  teeeest
    </div>
  </div>
</template>
<script>
import ToggleCard from "@/components/Global/ToggleCard.vue"

export default {
  name: 'Home',
  data(){
    return{
      showTheContent: false
    }
  },
  components:{
   ToggleCard,
  },
  methods:{
    showCardContent(){
      this.showTheContent = !this.showTheContent
    }
  }
}
</script>

<style scoped>
    .cardContainer{
        background: #F8F8F8;
        box-shadow: 0 0 10pt #00000029;
        border-radius: 10px;
        text-align: left;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        margin: 4px;
    }
</style>

------>