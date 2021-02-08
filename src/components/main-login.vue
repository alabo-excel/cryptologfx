<template>
  <div class="flex justify-center">
    <div class="text-xs my-20">
      <h1 class="td-blue text-2xl font-extrabold text-center lg:m-8">
        Member <span class="tl-blue">Login</span>
      </h1>
      <div>
        <input
          type="text"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="Password"
        />
      </div>
      <div>
        <input
          type="button"
          value="LOGIN"
          class="lg:m-2 p-3 lg:w-96 w-80 my-3 rounded-md bg-l-blue text-white"
          placeholder="Password"
        />
      </div>
      <div>
          <p  class="text-right py-3 pr-3">Forgot Password?</p>
      </div>
      <div class="text-center py-8">
          <p>Don’t have an account? <span class="pl-4 tl-blue font-bold">Sign up</span></p>
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
