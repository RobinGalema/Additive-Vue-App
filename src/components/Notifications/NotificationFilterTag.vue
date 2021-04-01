<template>
    <div class="notificationFilterTag">
        <div class="filterTag">
            {{title}}
        </div>
        <div class="cancelBtn">
            <img src="@/assets/icons/cancel.png" />
        </div>
    </div>
</template>


<script>
    export default {
        name: 'NotificationFilterTag',
        props: {
            title: String
        }
    }
</script>


<style scoped>
    .notificationFilterTag {
        height: 20px;
        background: #FCC517;
        border-radius: 20px;
        padding: 4px 10px;
        font-size: 10pt;
        color: #ffffff;
        display: flex;
    }

    .filterTag {
        width: 90%;
    }

    .cancelBtn {
        width: 10%;
        margin: 4px 0;
    }

    .cancelBtn img {
        height: 100%;
        float: right;
    }
</style>