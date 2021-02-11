<template>
  <div class="nav shadow-lg p-3">
    <div class="lg:flex pl-5 pr-5 text-center">
      <div class="flex">
        <div @click="toggleNav" class="p-2">
          <img src="../assets/ham.png" alt="" />
        </div>
        <div></div>
        <div @click="toggleNav" class="flex p-2">
          <img class="" src="../assets/CryptoLog.png" alt="" />
          <img class="" src="../assets/Vector.png" alt="" />
        </div>
      </div>

      <div id="link" class="ml-auto ">
        <ul class="lg:flex">
          <router-link to="/">
            <li class="p-2 border-b-2 border-blue ml-5 mr-5">HOME</li>
          </router-link>
          <li class="p-2 ml-3 mr-3">ABOUT</li>
          <li class="p-2 ml-3 mr-3">CONTACT</li>
          <router-link to="/login">
            <li class="p-2 ml-3 mr-3 tl-blue">LOGIN</li>
          </router-link>
          <router-link to="/signup">
            <li
              class="p-2 bg-l-blue rounded-lg pl-5 pr-5 mr-5 ml-3 text-white text-center"
            >
              SIGN UP
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      ham: true
    };
  },
  methods: {
    toggleNav() {
      if ((document.getElementById("link").style.display = "none")) {
        document.getElementById("link").style.display = "block";
      } else {
        document.getElementById("link").style.display = "block";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
  font-weight: 500;
  font-size: 15px !important;
}
@media (max-width: 600px) {
  #link {
    display: none;
  }
}
</style>
