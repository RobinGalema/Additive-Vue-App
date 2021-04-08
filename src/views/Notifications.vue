<template>
  <div class="topSection">
    <h1>Notifications</h1>
    <NotificationsFilter />
    <NotificationFilterTags />
</div>
<NotificationContainer machinename="Machine 1" />
<NotificationContainer machinename="Machine 2" />
</template>

<script>
import NotificationContainer from "../components/Notifications/NotificationContainer";
import NotificationFilterTags from "../components/Notifications/NotificationFilterTags";
import NotificationsFilter from "../components/Notifications/NotificationsFilter";

import Dropdown from "../components/Global/Dropdown";

export default {
  name: "Notifications",

  components: {
    NotificationFilterTags,
    NotificationContainer,
    NotificationsFilter,
  },
};
</script>