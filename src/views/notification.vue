<template>
  <div class="notif">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav />
      <Notification class="ml-56 main" />
      <LastFooter class="w-full" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Notification from "@/components/notification-main.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Notification
  }
};
</script>
<style scoped>
.notif {
  background-color: #f1f1f1;
}
@media (max-width: 700px) {
  .main{
    margin-left:0px;
  }
}
</style>