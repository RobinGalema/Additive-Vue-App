<template>
    <div class="topSection">
        <h1>Notifications</h1>
        <NotificationsFilter />
        <NotificationFilterTags />
    </div>


    <Dropdown dropdownTitle="Machine 1" dropdownContent=""/>

    <NotificationCard machine="1" title="Machine 1 stopped" context="Machine 1 stopped because a fatal error occurred" minutes="20" linkToMachine="" level="high"/>
    <NotificationCard machine="1" title="Low powder level" context="Machine 1's powder supply is almost empty" minutes="25" linkToMachine="" level="medium"/>
    <NotificationCard machine="1" title="Powder supply halfway empty" context="The powder basin of Machine 1 halfway empty" minutes="200" linkToMachine="" level="low"/>

    <Dropdown dropdownTitle="Machine 2" dropdownContent=""/>

    <NotificationCard machine="2" title="Low powder level" context="Machine 2's powder supply is almost empty" minutes="48" linkToMachine="" level="medium"/>

    <Dropdown dropdownTitle="Machine 3" dropdownContent=""/>

    <NotificationCard machine="3" title="Error pre-manufacturing" context="The print cannot be started because of a pre-manufactering error" minutes="48" linkToMachine="" level="high"/>
    <NotificationCard machine="3" title="Machine stopped" context="Machine 4 stopped because a fatal error occurred" minutes="114" linkToMachine="" level="high"/>

    <Dropdown dropdownTitle="Machine 4" dropdownContent=""/>

    <Dropdown dropdownTitle="Machine 5" dropdownContent=""/>

    <NotificationCard machine="5"  title="Low oxygen level" context="Machine 5's oxygen level is unstable" minutes="21" linkToMachine="" level="medium"/>
    <NotificationCard machine="5" title="Cannot start print due to a fatal error" context="No plate was found at machine 5" minutes="48" linkToMachine="" level="high"/>

    <Dropdown dropdownTitle="Machine 6" dropdownContent=""/>

    <Dropdown dropdownTitle="Machine 7" dropdownContent=""/>

    <Dropdown dropdownTitle="Machine 8" dropdownContent=""/>


</template>

<script>
    import NotificationFilterTags from "../components/Notifications/NotificationFilterTags";
    import NotificationCard from "../components/Notifications/NotificationCard";
    import NotificationsFilter from "../components/Notifications/NotificationsFilter";

    import Dropdown from "../components/Global/Dropdown";



    export default {
        name: 'Notifications',

        components: {
            NotificationFilterTags,
            NotificationCard,
            Dropdown,
            NotificationsFilter,
            }
    }
</script>

<style scoped>
.topSection {
    display: unset;
}
</style>