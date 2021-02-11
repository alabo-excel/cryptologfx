<template>
  <div class="referals">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav class="w-full" />
      <Referals class="main ml-56" />
      <LastFooter class="w-full" />
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
@media (max-width: 700px) {
  .main{
    margin-left:0px;
  }
}
</style>