<template>
  <div class="login">
    <!-- <MainNav /> -->
    <MainLogin />
    <MainFooter />
    <LastFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import MainNav from "@/components/main-nav.vue";
import MainLogin from "@/components/main-login.vue";
import MainFooter from "@/components/main-footer.vue";
import LastFooter from "@/components/last-footer.vue";

export default {
  name: "Home",
  components: {
    MainNav,
    MainLogin,
    MainFooter,
    LastFooter
  }
};
</script>
