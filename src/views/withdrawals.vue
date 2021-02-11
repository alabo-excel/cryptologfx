<template>
  <div class="dashboard">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div>
      <DashboardNav class="w-full" />
      <Withdrawals class="ml-56 main" />
      <LastFooter class="w-full" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Withdrawals from "@/components/withdrawals-main.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Withdrawals
  }
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