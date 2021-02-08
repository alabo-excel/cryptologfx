<template>
  <div class="flex justify-center">
    <div class="text-xs my-20 pl-8 lg:pl-0">
      <h1 class="td-blue text-2xl font-extrabold text-center m-8">
        Create <span class="tl-blue">Account</span>
      </h1>
      <div class="flex lg:flex-row flex-col">
        <input
          type="text"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="First Name"
        />
        <input
          type="text"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="Last Name"
        />
      </div>
      <div class="flex lg:flex-row flex-col">
        <input
          type="password"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="E-mail"
        />
        <input
          type="text"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="Password"
        />
      </div>
      <div class="flex lg:flex-row flex-col">
        <input
          type="password"
          class="pl-6 border-2 lg:m-2 my-3 p-3 lg:w-64 w-80 rounded-md border-blue"
          placeholder="United States"
        /><p class="lg:pt-5 pr-12 lg:mr-3">Select Country</p>
        <input
          type="text"
          class="pl-6 border-2 lg:m-2 p-3 my-3 lg:w-96 w-80 rounded-md border-blue"
          placeholder="Confirm Password"
        />
      </div>
      <div class="flex lg:w-auto w-80 ml-2 m-6">
          <input type="checkbox" class="p-4 mr-6 w-6 h-6">
          <p class="pt-1">I want to receive CryptoLogFX Newsletters with best deals and offers</p>
      </div>
      <div>
        <input
          type="button"
          value="SIGN UP"
          class="lg:m-2 p-3 rounded-md bg-l-blue text-white diff"
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
.diff{
  width: 98%;
}
@media(max-width: 670px){
  .diff{
    width: 20rem;
  }
}
</style>
