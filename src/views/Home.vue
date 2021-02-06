<template>
  <div class="home">
    <MainNav />
    <MainHome />
  </div>
</template>

<script>
// @ is an alias to /src
import MainNav from '@/components/main-nav.vue'
import MainHome from '@/components/home-main.vue'

export default {
  name: 'Home',
  components: {
    MainNav,
    MainHome
  }
}
</script>
