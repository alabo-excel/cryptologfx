<template>
  <div class="hello lg:p-9 p-4 lg:px-20 ">
    <div class="pb-8">
      <h1>UPDATE WITHDRAWAL ACCOUNT INFO</h1>
    </div>
    <div class="lg:flex">
      <div
        class="bg-white my-4 lg:m-0 p-6 rounded-md w-8/12 lg:mr-3 "
      >
        <div class="flex justify-evenly my-4">
          <div>
            <p class="tl-blue">Bitcoin Address:</p>
          </div>
          <div>
            <input
              class="border-l-2 border-r-2 lg:w-80 rounded-md p-1 border-blue-100"
              type="text"
              value="3L8wzH6zKC1WmQuTN5gwAtXeVd9aYSBG5v"
            />
          </div>
        </div>
        
         <div class="flex justify-evenly my-4">
          <div>
            <p class="tl-blue">Ethereum Address:</p>
          </div>
          <div>
            <input
              class="border-l-2 border-r-2 lg:w-80 rounded-md p-1 border-blue-100"
              type="text"
              value="Ojfhjw722njbdjEnkj3L8wzH6zKC1WmQuTN5gwAtXeVd9aYSBG5v"
            />
          </div>
        </div>
      </div>
    </div>
    <input type="button" value="Update Account" class="p-2 bg-l-blue rounded-md my-4 text-white w-40">
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
