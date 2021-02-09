<template>
  <div class="hello bg-d-blue text-sm w-1/6">
    <div>
      <div class="flex p-4 justify-center">
        <img class="w-24 h-4 mr-1" src="../assets/footer1.png" alt="" />
        <img class="w-6 h-5" src="../assets/footer2.png" alt="" />
      </div>
      <router-link to="/">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Path 357.svg" alt="" />
        <p class="pl-2">Home</p>
      </div>
      </router-link>
      <router-link to="/dashboard">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-dashboard.svg" alt="" />
        <p class="pl-2">Dashboard</p>
      </div>
      </router-link>
      <router-link to="/account">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-account.svg" alt="" />
        <p class="pl-2">Account</p>
      </div>
      </router-link>
      <router-link to="notification">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-NOTIF.svg" alt="" />
        <p class="pl-2">Notification</p>
      </div>
      </router-link>
      <router-link to="">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-2.svg" alt="" />
        <p class="pl-2">Transaction (ROI) log</p>
      </div>
      </router-link>
      <router-link to="/deposits">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-1.svg" alt="" />
        <p class="pl-2">Deposits</p>
      </div>
      </router-link>
      <router-link to="/withdrawals">
      <div class="flex p-4 text-white">
        <img class="w-5 -ml-1" src="../assets/withdrawal.svg" alt="" />
        <p class="pl-2">Withdrawals</p>
      </div>
      </router-link>
      <router-link to="">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector.svg" alt="" />
        <p class="pl-2">Investment Plan</p>
      </div>
      </router-link>
      <router-link to="/support">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Path 107.svg" alt="" />
        <p class="pl-2">Support</p>
      </div>
      </router-link>
      <router-link to="/referals">
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/referal.svg" alt="" />
        <p class="pl-2">Referrals</p>
      </div>
      </router-link>
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Path 108.svg" alt="" />
        <p class="pl-2">Settings</p>
      </div>
      <div class="flex p-4 text-white">
        <img class="w-5" src="../assets/Vector-logout.svg" alt="" />
        <p class="pl-2">Logout</p>
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
