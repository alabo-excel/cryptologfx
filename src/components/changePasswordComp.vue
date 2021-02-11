<template>
  <div class="hello lg:p-9 p-4 lg:px-20 lg:w-7/12">
    <div class="pb-8">
      <h1>CHANGE PASSWORD</h1>
    </div>
    <div class="lg:flex">
      <div
        class="bg-white my-4 lg:m-0 p-6 rounded-md lg:mr-3 "
      >
    
        <div class="flex justify-between my-4">
          <div>
            <p class="tl-blue">Old Password:</p>
          </div>
          <div>
            <input
              class="border-2 lg:w-80 rounded-md p-1 border-blue-100"
              type="password"
              value="Rumuola, Ph Nigeria"
            />
          </div>
        </div>

        <div class="flex justify-between my-4">
          <div>
            <p class="tl-blue lg:mr-3">New Password:</p>
          </div>
          <div>
            <input
              class="border-2 lg:w-80 rounded-md p-1 border-blue-100"
              type="password"
              value="Rumuola, Ph Nigeria"
            />
          </div>
        </div>
        <div class="flex justify-between my-4">
          <div>
            <p class="tl-blue">Confirm New Password:</p>
          </div>
          <div>
            <input
              class="border-2 lg:w-80 rounded-md p-1 border-blue-100"
              type="password"
              value="Rumuola, Ph Nigeria"
            />
          </div>
        </div>
      </div>
    </div>
    <input type="button" value="Change Password" class="p-2 bg-l-blue rounded-md my-4 text-white w-40">
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
