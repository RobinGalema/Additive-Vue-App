<template>
 <!-- Component:     <Dropdown dropdownTitle="Title" />    ------->
    <div class="dropdownBackground">
        <div @click="show = !show" class="topRow"> <!-- als je op de topRow klikt veranderdt show naar het tegenovergestelde waarde -->
                <h2>{{dropdownTitle}}</h2>
                <img :class="[show ? 'spinArrow' : '', 'icon']" src="../../assets/icons/chevron-down.svg"><!-- als "show" true is dan krijgt de div de "spinArrow" class, zo niet, dan krijgt die geen class.-->  
        </div>

        <transition 
                @beforeEnter="beforeEnter"
                @afterEnter="afterEnter"
                @beforeLeave="beforeLeave"
                @afterLeave="afterLeave"> <!-- dit zorgt voor de animatie bij het uitklappen van de dropdwon -->
            <div v-show="show" class="dropdownContent">
                    {{dropdownContent}} 
            </div>
        </transition>
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
        //----- methodes voor de expand animatie
        beforeEnter(el) {
        el.classList.remove("collapse");
        el.style.display = "block";
        el.classList.add("collapsing");
        el.style.height = `${el.scrollHeight}px`;
        },
        afterEnter(el) {
        el.classList.remove("collapsing");
        el.classList.add("collapse", "in");
        },
        beforeLeave(el) {
        el.classList.add("collapsing");
        el.classList.remove("collapse", "in");
        el.style.height = 0;
        },
        afterLeave(el) {
        el.classList.remove("collapsing");
        el.classList.add("collapse");
        el.style.display = "none";
        },
        //----- einde methodes voor de expand animatie
    }
}
</script>

<style scoped>

.dropdownBackground{
        text-align: left;
        padding-top: 2px;
        padding-bottom: 2px;
        width: 100vw;
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

     /*------- classes voor de expand animatie ----*/
    .collapse {
	    display: none;
    }

    .collapse.in {
	    display: block;
    }
    .collapsing {
	    position: relative;
	    height: 0;
	    overflow: hidden;
	    transition: height 0.375s ease;
    }
 /*------- einde classes voor de expand animatie ----*/

</style>