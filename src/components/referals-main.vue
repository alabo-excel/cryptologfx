<template>
  <div class="hello">
    <div class="hello lg:p-9 p-4 lg:px-20">
      <div class="pb-8">
        <h1>REFERRALS</h1>
      </div>
      <div class="text-center p-8 bg-white mb-6">
        <span class="font-bold td-blue text-lg m-8">Refer your friends to CryptoLogFX community and earn referral bonuses</span>
        <p class="p-4 text-xs font-bold">Below is your referral link:</p>
        <div class="border-2 border-blue lg:w-8/12 td-blue font-extrabold text-sm p-2 rounded-md mx-auto mb-5 bg-blue-300">
          https://cryptologfx.com/ref/000165
        </div>
      </div>
      <div class="overflow-x-auto">
        <div
          class="flex diff justify-between bg-l-blue p-2 px-12 rounded-t-md text-white text-sm"
        >
          <div class="pr-3">
            <p>Referal name</p>
          </div>
          <div class="px-3">
            <p>Referral Investment Plan</p>
          </div>
          <div class="px-3">
            <p>Referral Status</p>
          </div>
          <div class="px-3">
            <p>Date Registered</p>
          </div>
        </div>

        <div
          v-for="(noti, index) in notifs"
          :key="index"
          class="flex justify-between diff mb-0.5 p-2 py-3 bg-white text-sm px-12"
        >
          <div class="pr-3">
            <p>{{ noti.name}}</p>
          </div>
          <div class="lg:pr-36 lg:float-left px-3">
            <p>{{ noti.plan}}</p>
          </div>
          <div class="px-2">
            <p></p>
          </div>
          <div class="px-3">
            <p>22-07-2020</p>
          </div>
        </div>

        <div class="font-bold flex justify-between mb-12 mt-7 text-sm">
          <p class="tl-blue">Show older</p>
          <p>Displaying 1-10 of 25</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => {
    return {
      notifs: [
        { name: "John Doe", plan: "Advanced" },
        { name: "John Doe", plan: "Advanced" },
        { name: "John Doe", plan: "Basic" },
        { name: "John Doe", plan: "Capitalist" },
        { name: "John Doe", plan: "Pro" },
        { name: "John Doe", plan: "Basic" },
        { name: "John Doe", plan: "Pro" },
        { name: "John Doe", plan: "Pro" },
        { name: "John Doe", plan: "Capitalist" },
        { name: "John Doe", plan: "Advanced" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 400px) {
  .diff{
    width: 150%;
  }
}
</style>
