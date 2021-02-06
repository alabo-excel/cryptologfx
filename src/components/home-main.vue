<template>
  <div class="main">
    <div>
      <img class="hero" src="../assets/landing img.png" alt="" />
    </div>
    <div class="over absolute opacity-50 bg-blue-900 w-full h-4/5"></div>
    <div class="absolute top-0">
      <div class="ml-32 pl-5">
        <h1 class="text-6xl text-white font-black mt-52">
          Secured <span class="text-blue-700">Investment</span> <br />
          Platform.
        </h1>
        <p class="py-4 w-5/12 pr-5 text-white text-base">
          We manage your Bitcoin investment, trade to make better profits for
          you. Your ROI is our top priority, Invest now.
        </p>
        <input
          class="p-4 rounded-lg pl-5 pr-5 bg-blue-600 text-white text-sm"
          type="button"
          value="GET STARTED"
        />
      </div>
    </div>
    <div>
      <div class="text-center m-14">
        <h1 class="text-3xl font-extrabold">INVESTMENT <span class="text-blue-600">BENEFITS</span></h1>
        <p class="h-1 bg-blue-600"></p>
      </div>
      <div class="flex justify-center text-center">
        <div class="shadow-xl w-1/6	p-4 m-3 py-6">
          <img class="mx-auto w-7" src="../assets/secure.svg" alt="" />
          <div>
            <p class="py-4 font-extrabold text-lg	">Fund Security</p>
            <p class="text-sm">
              We guarantee that your funds are 100% secured. We do no store but
              trade.
            </p>
          </div>
        </div>

        <div class="shadow-xl w-1/6	p-4 m-3 py-6">
          <img class="mx-auto w-11" src="../assets/profit.svg" alt="" />
          <div>
            <p class="py-4 font-extrabold text-lg	">Daily Profit</p>
            <p class="text-sm pb-5">
              Profits are made on daily bases deploying our effective trading
              strategy
            </p>
          </div>
        </div>

        <div class="shadow-xl w-1/6	p-4 m-3 py-6">
          <img class="mx-auto w-12" src="../assets/withdrawal.svg" alt="" />
          <div>
            <p class="py-4 font-extrabold text-lg	">Fast Withdrawal</p>
            <p class="text-sm pb-5">
              Withdrawals are processed instanly, day to day to avoid backlogs.
            </p>
          </div>
        </div>

        <div class="shadow-xl w-1/6	p-4 m-3 py-6">
          <img class="mx-auto w-11" src="../assets/support.svg" alt="" />
          <div>
            <p class="py-4 font-extrabold text-lg	">24/7 Support</p>
            <p class="text-sm pb-5">
              Our experienced support team is always online to attend to your
              queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero{
  height: 80vh;
  width: 100%;
}
.over {
  top: 73px;
  bottom: 0px;
}
</style>
