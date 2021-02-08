<template>
  <div class="home">
    <!-- <MainNav /> -->
    <MainHome />
    <FooterMain />
    <LastFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/main-nav.vue'
import MainHome from '@/components/home-main.vue'
import FooterMain from '@/components/main-footer.vue'
import LastFooter from '@/components/last-footer.vue'


export default {
  name: 'Home',
  components: {
    MainNav,
    MainHome,
    FooterMain,
    LastFooter
  }
}
</script>
