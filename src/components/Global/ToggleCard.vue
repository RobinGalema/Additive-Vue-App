<template>
    <!-- Component: <ToggleCard cardTitle="Title" /> ------->
    <div class="cardBackground">
        <div class="topRow"> <!-- als je op de topRow klikt veranderdt show naar het tegenovergestelde waarde -->
            <h4>{{cardTitle}}</h4>
            <img :class="[show ? 'spinArrow' : '']" src="../../assets/icons/chevron-down.svg"> <!-- als "show" true is dan krijgt de div de "spinArrow" class, zo niet, dan krijgt die geen class.-->  
        </div>

        <transition
            @beforeEnter="beforeEnter"
            @afterEnter="afterEnter"
            @beforeLeave="beforeLeave"
            @afterLeave="afterLeave">
        <div v-show="show" class="cardContent">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>
        </transition>
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
        
    },
}

</script>

<style scoped>

    .cardBackground{
        background: #F8F8F8;
        box-shadow: 0 0 10pt #00000029;
        border-radius: 10px;
        text-align: left;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100%;
        padding-left: 8px;
        padding-right: 8px;
    }

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
