<template>
    <div class="topSection">
        <h1>Notifications</h1>
        <NotificationsFilter />
        <NotificationFilterTags />
    </div>

    <Dropdown dropdownTitle="Machine 1" dropdownContent="hallo"/>

    <NotificationCard title="Machine stopped" context="Machine 1 stopped because a fatal error occurred" minutes="20" linkToMachine="" level="high"/>
    <NotificationCard title="Machine stopped" context="Machine 1 stopped because a fatal error occurred" minutes="25" linkToMachine="" level="high"/>
    <NotificationCard title="Machine stopped" context="Machine 1 stopped because a fatal error occurred" minutes="36" linkToMachine="" level="high"/>

    <Dropdown dropdownTitle="Machine 4" dropdownContent="hallo"/>

    <NotificationCard title="Machine stopped" context="Machine 4 stopped because a fatal error occurred" minutes="48" linkToMachine="" level="high"/>
    <NotificationCard title="Machine stopped" context="Machine 4 stopped because a fatal error occurred" minutes="114" linkToMachine="" level="high"/>


</template>

<script>
    import NotificationFilterTags from "../components/Notifications/NotificationFilterTags";
    import NotificationCard from "../components/Notifications/NotificationCard";
    import NotificationsFilter from "../components/Notifications/NotificationsFilter";

    import Dropdown from "../components/Global/Dropdown";
    import GlobalButton from "../components/Global/GlobalButton";



    export default {
        name: 'Notifications',

        components: {
            NotificationFilterTags,
            NotificationCard,
            Dropdown,
            GlobalButton,
            NotificationsFilter,
            }
    }
</script>

<style scoped>

</style>