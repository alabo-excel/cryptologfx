<template>
  <div class="dashboard">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav />
      <Withdrawal class="ml-56 main" />
      <LastFooter class="" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Withdrawal from "@/components/withdrawalInfoComp.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Withdrawal
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