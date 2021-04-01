<template>
    <div class="cardContainer">
        <ToggleCard @show-card-content="showCardContent" cardTitle="Recent Notifications" />
        <div v-if="showTheContent">
                    teeeest
        </div>
    </div>

</template>

<script>
    import ToggleCard from "@/components/Global/ToggleCard.vue"
    export default {
        name: 'HomeScreenNotifications',
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
        margin-top: 12px;
    }


</style>