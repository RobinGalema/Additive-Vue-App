<template>
    <div class="notificationCard">
        <div class="status">
            <!-- <img :src="['@/assets/icons/alert-', alert, '.png']"/> -->
            <img src="@/assets/icons/alert-high.png"/>
        </div>
        <div class="notification">
            <b>{{title}}</b> - {{context}}
        </div>
        <div class="timestamp">
            30 min ago
        </div>
        <div class="linkToMachine">
            <a href="">Check machine</a>
        </div>
    </div>
    
</template>
 
<script>

    export default {
        name: 'NotificationCard',
        props: {
            title: String,
            context: String,
            timestamp: String,
            linkToMachine: String
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
}

.status {
    height: 100%;
    position:relative;
    margin-right: 10px;
    grid-row: 1/3;
}

.status img {
    width:100%;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

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