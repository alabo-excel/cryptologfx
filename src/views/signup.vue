<template>
  <div class="login">
    <MainNav />
    <MainSignup />
    <MainFooter />
    <LastFooter />
  </div>
</template>
<script>
// @ is an alias to /src
import MainNav from "@/components/main-nav.vue";
import MainSignup from "@/components/main-signup.vue";
import MainFooter from "@/components/main-footer.vue";
import LastFooter from "@/components/last-footer.vue";

export default {
  name: "Home",
  components: {
    MainNav,
    MainSignup,
    MainFooter,
    LastFooter
  }
};
</script>
