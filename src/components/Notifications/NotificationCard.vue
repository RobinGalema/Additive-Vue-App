<template>
    <div class="notificationCard">
        <div :class="'status ' + level">
            <!-- <img :src="'@/assets/icons/alert-' + level + '.png'"/> -->
            <!-- <img src="@/assets/icons/alert-high.png"/> -->
        </div>
        <div class="notification">
            <b>{{title}}</b> - {{context}}
        </div>
        <div class="timestamp">
            {{minutes}} min ago
        </div>
        <div class="linkToMachine">
          <router-link :to="{path: '/machines/' + machine}">Check machine</router-link>
        </div>
    </div>
    
</template>
 
<script>

    export default {
        name: 'NotificationCard',
        props: {
            machine: String,
            title: String,
            context: String,
            minutes: String,
            level: String
        }
    }
</script>

<style scoped>
.notificationCard {
    background: #F2F2F2;
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 10% 45% 45%;
    grid-template-rows: 2fr 1fr;
    margin-bottom: 10px;
}

.status {
    height: 100%;
    position:relative;
    margin-right: 10px;
    grid-row: 1/3;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.status.high {
    background-image: url("../..//assets/icons/alert-high.png");
}

.status.medium {
    background-image: url("../..//assets/icons/alert-medium.png");
}

.status.low {
    background-image: url("../..//assets/icons/alert-low.png");
}

/* .status img {
    width:100%;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
} */

.notification {
    grid-column: 2/4;
}

.timestamp {
    font-size: 9pt;
    align-self: flex-end;
    justify-self:flex-start;
}

.linkToMachine {
    font-size: 9pt;
    align-self: flex-end;
    justify-self:flex-end;
}
</style>