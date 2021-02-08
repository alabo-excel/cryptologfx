<template>
  <div class="hello p-9 px-20">
    <div class="pb-8">
      <h1>OVERVIEW</h1>
    </div>
    <div class="flex">
      <div class="bg-white p-6 rounded-md flex justify-between lg:mr-3 w-6/12">
        <div>
          <div class="tl-blue pb-3 text-sm">
            <span>WALLET BALANCE</span>
          </div>
          <div class="pb-5 text-xl">
            <span>$565.73</span>
          </div>
        </div>
        <div class="my-auto">
          <div class="bg-blue-300 p-4 rounded-full">
            <img class="w-5" src="../assets/wallet.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-md flex justify-between w-6/12 lg:ml-3">
        <div>
          <div class="tl-blue pb-3 text-sm">
            <span>CURRENT INVESTMENT PLAN</span>
          </div>
          <div class="pb-5 text-xl">
            <span>ADVANCED (50%)</span>
          </div>
        </div>
        <div class="my-auto">
          <div class="bg-blue-300 p-4 rounded-full">
            <img class="w-5" src="../assets/icon_Invoices.svg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex mt-6">
      <div
        class="bg-white p-6 pr-4 rounded-md flex justify-between lg:mr-3 w-6/12"
      >
        <div>
          <div class="tl-blue pb-3 text-sm">
            <span>TOTAL DEPOSITS</span>
          </div>
          <div class="pb-5 text-xl">
            <span>$1,942.89</span>
          </div>
          <div class="flex text-green-500 text-xs">
            <img
              class="h-3 w-1 my-auto mr-3"
              src="../assets/UpArrow.png"
              alt=""
            />
            <p>23.5%</p>
          </div>
        </div>
        <div class="">
          <div class="bg-yellow-200 w-12 ml-auto p-4 rounded-full mb-2">
            <img class="w-5" src="../assets/bitcoin.svg" alt="" />
          </div>
          <img src="../assets/Bar Chart-2.svg" alt="" />
        </div>
      </div>

      <div
        class="bg-white p-6 pr-4 rounded-md flex justify-between lg:mr-3 w-6/12"
      >
        <div>
          <div class="tl-blue pb-3 text-sm">
            <span>PROFIT</span>
          </div>
          <div class="pb-5 text-xl">
            <span>$3,134.17</span>
          </div>
          <div class="flex text-green-500 text-xs">
            <img
              class="h-3 w-1 my-auto mr-3"
              src="../assets/UpArrow.png"
              alt=""
            />
            <p>13.5%</p>
          </div>
        </div>
        <div class="">
          <div class="bg-green-300 w-12 ml-auto p-4 rounded-full mb-2">
            <img class="w-5" src="../assets/profit-dash.svg" alt="" />
          </div>
          <img src="../assets/Bar Chart-1.svg" alt="" />
        </div>
      </div>

      <div
        class="bg-white p-6 pr-4 rounded-md flex justify-between lg:mr-3 w-6/12"
      >
        <div>
          <div class="tl-blue pb-3 text-sm">
            <span>REFERRAL BONUS</span>
          </div>
          <div class="pb-5 text-xl">
            <span>$307.53</span>
          </div>
          <div class="flex text-green-500 text-xs">
            <img
              class="h-3 w-1 my-auto mr-3"
              src="../assets/UpArrow.png"
              alt=""
            />
            <p>23.5%</p>
          </div>
        </div>
        <div class="">
          <div class="bg-purple-300 w-12 ml-auto p-4 rounded-full mb-2">
            <img class="w-5" src="../assets/ref bonus.png" alt="" />
          </div>
          <img src="../assets/Bar Chart.svg" alt="" />
        </div>
      </div>
    </div>

    <div class="tl-blue bg-white rounded-md my-4 p-2 text-center">
      <p>// CoinGecko Top 20 Crypto Ticker and Changes Scroll Widget Here</p>
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
