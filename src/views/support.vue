<template>
  <div class="support">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav class="w-full" />
      <Support class="ml-52 main" />
      <LastFooter class="w-full" />
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
@media (max-width: 700px) {
  .main{
    margin-left:0px;
  }
}
</style>