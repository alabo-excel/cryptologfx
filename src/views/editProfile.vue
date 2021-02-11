<template>
  <div class="dashboard">
    <!-- <Sidebar class="h-screen fixed" /> -->
    <div class="">
      <DashboardNav />
      <EditProfile class=" ml-56 main" />
      <LastFooter class="" />
    </div>
  </div>
</template>

<script>
import DashboardNav from "../components/dashboard-nav";
import Sidebar from "../components/sidebar";
import LastFooter from "@/components/last-footer.vue";
import EditProfile from "@/components/editProfileComp.vue";

export default {
  components: {
    DashboardNav,
    Sidebar,
    LastFooter,
    EditProfile
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