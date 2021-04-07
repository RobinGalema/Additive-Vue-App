<template>
    <NotificationFilterTags />
    <NotificationCard />
</template>

<script>
    import NotificationFilterTags from "@/components/Notifications/NotificationFilterTags";
    import NotificationCard from "../components/Notifications/NotificationCard";

    export default {
        name: 'Notifications',
        props: {
            title: String,
            context: String,
            timestamp: String,
            linkToMachine: String,
            level: String,
        },
        components: {
            NotificationFilterTags,
            NotificationCard,
            }
    }
</script>
