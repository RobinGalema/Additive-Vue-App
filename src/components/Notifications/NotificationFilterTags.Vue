<template>
<div class="filterSection">
    <div class="emptyFilters">
        No active filters
    </div>

    <div class="notificationFilterTags">
        <NotificationFilterTag title="machine 1"/>
        <NotificationFilterTag title="machine 2"/>
        <NotificationFilterTag title="machine 3"/>
    </div>
</div>
    
</template>


<script>
    import NotificationFilterTag from "@/components/Notifications/NotificationFilterTag";

    export default {
        name: 'NotificationFilterTags',
        props: {
            title: String
        },
        components: {
            NotificationFilterTag,
        }
    }
</script>

<style scoped>
.filterSection {
    margin: 20px 0;
}

.emptyFilters {
    color: #D3D3D3;
}

.notificationFilterTags {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 5px;
}
</style>