<template>
  <div class="dashboard">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav class="w-full" />
      <Transaction class="main ml-56" />
      <LastFooter class="w-full" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Transaction from "@/components/transaction-main.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Transaction
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