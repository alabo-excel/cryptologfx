<template>
  <div class="nav flex justify-between h-16 bg-white">
    <div class="flex p-4">
      <img class="w-6 h-4 my-auto mx-5" src="../assets/ham.png" alt="" />
      <input
        class="border-2 border-blue-300 pl-12 bg-blue-100 rounded-full"
        type="text"
        placeholder="Search transactions"
      />
    </div>
    <div class="flex divide-x mx-7 divide-blue-800 my-5">
      <div class="flex ">
        <img class="w-8 h-6 mx-5 my-auto" src="../assets/Support Iocn.svg" alt="" />
        <img
          class="w-8 h-6 my-auto mr-5"
          src="../assets/Notification Icon.svg"
          alt=""
        />
      </div>
      <div class="flex">
        <p class="my-auto ml-5">John Doe</p>
        <img class="w-8 h-8 mx-5 my-auto" src="../assets/avatar.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
