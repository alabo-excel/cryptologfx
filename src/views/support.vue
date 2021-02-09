<template>
  <div class="support">
    <Sidebar class="h-screen fixed" />
    <div class="ml-56">
      <DashboardNav class="w-full" />
      <Support class="w-12/12" />
      <LastFooter class="bottom-0 w-full" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import Support from "@/components/support-main.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    Support
  }
};
</script>
<style scoped>
.support {
  background-color: #f1f1f1;
}
</style>