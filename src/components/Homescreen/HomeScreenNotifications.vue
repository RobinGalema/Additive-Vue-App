<template>
    <div class="cardContainer">
        <ToggleCard @show-card-content="showCardContent" cardTitle="Recent Notifications" />
        <div class="notifications" v-if="showTheContent" >
                <ul>
                    <li :key="notification.id" v-for="notification in notifications" >
                        <div class="error">
                             <img src="../../assets/icons/alert-octagon.svg"> 
                             <p>{{notification.machine}} - {{notification.text}}</p> 
                        </div>
                        <p class="time">{{notification.time}}</p>
                    </li>
                </ul>
                <router-link :class="[$route.name == 'Notifications' ? 'active' : '', 'tab']" to="/notifications">
                    <a>View all</a>
                </router-link>
        </div> <!-- Einde div: notifications -->
    </div> <!-- Einde div: cardContainer -->
</template>

<script>
    import ToggleCard from "@/components/Global/ToggleCard.vue"
    export default {
        name: 'HomeScreenNotifications',
        data(){
            return{
            showTheContent: true,
                notifications: [
                {
                "id": 1,
                "machine": "Machine 6",
                "text": "stopped due to a fatal error",
                "urgency": "high",
                "time": "8:23"
                },
                {
                "id": 2,
                "machine": "Machine 2",
                "text": "low powder level",
                "urgency": "low",
                "time": "11:05"
                },
                {
                "id": 3,
                "machine": "Machine 3",
                "text": "error pre-manufacturing",
                "urgency": "low",
                "time": "11:48"
                },
                {
                "id": 4,
                "machine": "Machine 5",
                "text": "stopped due to a fatal error, plate is missing",
                "urgency": "high",
                "time": "12:38"
                },
                {
                "id": 5,
                "machine": "Machine 5",
                "text": "warning, the job might stop due to low oxgyen levels",
                "urgency": "medium",
                "time": "15:56"
                },
            ]
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
    
    ul{
        list-style-type: none;
        padding: 0; 
        margin: 0; 
    }

    li {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
         margin-left: -8px;
        margin-right: -8px;
    }

    .error{
        color: #151539;
        display: flex;
        justify-content: center;
    }

    img{
        color: #EB6060;
        margin-right: 12px;
        margin-left: 8px;
    }

    .time{
        color: #BBBBBB;
        margin-right: 8px;
        margin-left: 12px;
    }

    li:nth-child(odd) {
        background-color: #F2F2F2;
    }
    li:nth-child(even) {
        background-color: #F8F8F8;
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