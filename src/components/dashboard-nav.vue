<template>
  <div>
    <Sidebar id="bar" class="h-screen fixed" />
    <div id="nav" class="nav ml-56 flex  justify-between h-16 bg-white">
      <div class="flex p-4">
        <img
          @click="toggleBar"
          class="w-6 h-4 my-auto mr-1 lg:mx-5"
          src="../assets/ham.png"
          alt=""
        />
        <input
          class="border-2 w-40 border-blue-300 lg:w-auto lg:pl-12 pl-6 bg-blue-100 rounded-full"
          type="text"
          placeholder="Search transactions"
        />
      </div>
      <div class="flex lg:divide-x lg:mx-7 divide-blue-800 my-5">
        <div class="flex ">
          <img
            class="lg:w-8 lg:h-6 w-6 h-4 lg:mx-5 mx-3 my-auto"
            src="../assets/Support Iocn.svg"
            alt=""
          />
          <img
            class="lg:w-8 lg:h-6 w-6 h-4 my-auto mr-5"
            src="../assets/Notification Icon.svg"
            alt=""
          />
        </div>
        <div class="flex">
          <p class="my-auto lg:ml-5 text-xs lg:text-sm">John Doe</p>
          <img class="lg:w-8 lg:h-8 w-6 h-6 mr-1 lg:mx-5 my-auto" src="../assets/avatar.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/sidebar";

export default {
  name: "HelloWorld",
  components: {
    Sidebar
  },
  methods: {
    toggleBar() {
      if (document.getElementById("nav").style.marginLeft === "0px") {
        document.getElementById("nav").style.marginLeft = "14rem";
        document.getElementById("bar").style.display = "block";
      } else {
        document.getElementById("nav").style.marginLeft = "0px";
        document.getElementById("bar").style.display = "none";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 700px) {
  #bar{
    display: none;
  }
  #nav{
    margin-left: 0px;
  }
}
</style>
