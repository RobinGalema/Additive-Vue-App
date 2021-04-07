<template>
    <div class="cardContainer">
        <ToggleCard @show-card-content="showCardContent" cardTitle="Currently Running" />
        <div v-if="showTheContent">
                 <div class="scrolling-wrapper">
                    <div class="machineKaart"><h2>QB021_NE</h2><p>Machine 1 | Core 3</p>
                        <div class="progress">
                            <div class="progress-value" style="width:75%"></div><div class="percentage">75%</div>
                        </div>
                        <div class="tijd">4h 7m remaining</div>
                    </div>
                    <div class="machineKaart"><h2>QB021_NE</h2><p>Machine 1 | Core 3</p>
                        <div class="progress">
                            <div class="progress-value" style="width:75%"></div><div class="percentage">75%</div>
                        </div>
                        <div class="tijd">4h 7m remaining</div>
                    </div>
                    <div class="machineKaart"><h2>QB021_NE</h2><p>Machine 1 | Core 3</p>
                        <div class="progress">
                            <div class="progress-value" style="width:75%"></div><div class="percentage">75%</div>
                        </div>
                        <div class="tijd">4h 7m remaining</div>
                    </div>
                    <div class="machineKaart"><h2>QB021_NE</h2><p>Machine 1 | Core 3</p>
                        <div class="progress">
                            <div class="progress-value" style="width:75%"></div><div class="percentage">75%</div>
                        </div>
                        <div class="tijd">4h 7m remaining</div>
                    </div>
                </div>
                  <router-link :class="[$route.name == 'Machines' ? 'active' : '', 'tab']" to="/machines">
                    <a>View all</a>
                  </router-link>
        </div>
    </div>

</template>

<script>
    import ToggleCard from "@/components/Global/ToggleCard.vue"
    export default {
        name: 'HomeScreenRunning',
        data(){
            return{
            showTheContent: true
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
        margin-left: 4px;
        margin-right: 4px;
        margin-top: 8px;
    }

    .scrolling-wrapper {
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
    }

    .scrolling-wrapper .machineKaart {
	    display: inline-block;
    }

    .scrolling-wrapper-flexbox {
	    display: flex;
	    flex-wrap: nowrap;
	    overflow-x: auto;
    }

    .scrolling-wrapper-flexbox .machineKaart {
	    flex: 0 0 auto;
	    margin-right: 3px;
    }

    .machineKaart {
	    width: 112px;
	    height: 112px;
	    background: #F2F2F2;
        border-radius: 10px;
        margin-right: 12px;
        padding: 8px;
    }

    .machineKaart > h2{
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 0;
        color: black;
    }

      .machineKaart > p{
        font-size: 12px;
        margin-top: 6px;
        color: black;
    }

    /* .scrolling-wrapper, .scrolling-wrapper-flexbox {
	    height: 80px;
	    margin-bottom: 20px;
	    width: 100%;
	    -webkit-overflow-scrolling: touch;
    } */

    .scrolling-wrapper::-webkit-scrollbar, .scrolling-wrapper-flexbox::-webkit-scrollbar {
	     display: none;
    }

    .progress {
        background: #F8F8F8;
        justify-content: flex-start;
        border-radius: 100px;
        align-items: center;
        position: relative;
        display: flex;
        height: 14px;
        width: 100%;
        margin-top: 24px;
    }

        .progress-value {
        animation: load 3s normal forwards;
        border-radius: 100px;
        background: #506ED5;
        height: 14px;
        width: 0;
        }


.percentage{
    font-size: 12px;
    position: absolute;
    left: 45%;
    color: #F8F8F8;
}

.tijd{
    color: #BBBBBB;
    font-size: 12px;
    text-align: center;
    padding-top: 18px;
}

  a{
        color: #506ED5;
        font-weight: bold;
        font-size: 14px;
        text-decoration: none;
        display: flex;
        justify-content: flex-end;
        padding-top: 8px;
        padding-bottom: 4px;
    }
 

</style>