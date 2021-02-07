<template>
  <div class="hello flex justify-center">
    <div class="text-xs my-20">
      <h1 class="td-blue text-2xl font-extrabold text-center m-8">
        Create <span class="tl-blue">Account</span>
      </h1>
      <div>
        <input
          type="text"
          class="pl-6 border-2 m-2 p-3 w-96 rounded-md border-blue"
          placeholder="First Name"
        />
        <input
          type="text"
          class="pl-6 border-2 m-2 p-3 w-96 rounded-md border-blue"
          placeholder="Last Name"
        />
      </div>
      <div>
        <input
          type="password"
          class="pl-6 border-2 m-2 p-3 w-96 rounded-md border-blue"
          placeholder="E-mail"
        />
        <input
          type="text"
          class="pl-6 border-2 m-2 p-3 w-96 rounded-md border-blue"
          placeholder="Password"
        />
      </div>
       <div class="flex">
        <input
          type="password"
          class="pl-6 border-2 m-2 p-3 w-64 rounded-md border-blue"
          placeholder="E-mail"
        /><p class="pt-5 pr-12">Select Country</p>
        <input
          type="text"
          class="pl-6 border-2 m-2 p-3 w-96 rounded-md border-blue"
          placeholder="Confirm Password"
        />
      </div>
      <div class="flex ml-2 m-6">
          <input type="checkbox" class="p-4 mr-12">
          <p>I want to receive CryptoLogFX Newsletters with best deals and offers</p>
      </div>
      <div>
        <input
          type="button"
          value="SIGN UP"
          class="m-2 p-3 rounded-md bg-l-blue text-white w-big"
          placeholder="Password"
        />
      </div>
      <div class="text-center py-8">
          <p>Already have an account? <span class="pl-4 tl-blue font-bold">Login</span></p>
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
