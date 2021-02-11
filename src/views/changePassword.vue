<template>
  <div class="dashboard">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav />
      <ChangePassword class=" ml-56 main" />
      <LastFooter class="" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import ChangePassword from "@/components/changePasswordComp.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    ChangePassword
  },
};
</script>
<style scoped>
.dashboard {
  background-color: #f1f1f1;
}
@media (max-width: 700px) {
  .main{
    margin-left:0px;
  }
}
</style>