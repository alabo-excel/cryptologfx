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
      <router-link to="">
        <div @click="accountMore = !accountMore" class="flex p-4 text-white">
          <img class="w-5" src="../assets/Vector-account.svg" alt="" />
          <p class="pl-2">Account</p>
          <p v-if="accountMore === false" class="pl-5">></p>
          <p v-else class="pl-5"><</p>
        </div>
        <ul v-if="accountMore === true" class="pl-8 text-white">
          <router-link to="/editprofile">
            <li class="p-3">Edit Profile</li>
          </router-link>
          <router-link to="/changepassword">
            <li class="p-3">Change Password</li>
          </router-link>
          <router-link to="withdrawalinfo">
            <li class="p-3">Withdrawal Info</li>
          </router-link>
        </ul>
        <div v-else></div>
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
      <router-link to="/deposit">
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
        <div
          @click="investmentMore = !investmentMore"
          class="flex p-4 text-white"
        >
          <img class="w-5" src="../assets/Vector.svg" alt="" />
          <p class="pl-2">Investment Plan</p>
          <p v-if="investmentMore === false" class="pl-5">></p>
          <p v-else class="pl-5"><</p>
        </div>
        <ul v-if="investmentMore === true" class="pl-8 text-white">
          <li class="p-3">Join Plan</li>
          <li class="p-3">Active Plan</li>
        </ul>
        <div v-else></div>
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
  name: "HelloWorld",
  data: () => {
    return {
      accountMore: false,
      investmentMore: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style-type: none;
}
</style>
