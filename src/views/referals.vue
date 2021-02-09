<template>
  <div class="referals">
    <Sidebar class="h-screen fixed" />
    <div class="ml-56">
      <DashboardNav class="w-full" />
      <Referals class="w-12/12" />
      <LastFooter class="fixed bottom-0 w-screen" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Referals from "@/components/referals-main.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Referals
  }
};
</script>
<style scoped>
.referals {
  background-color: #f1f1f1;
}
</style>