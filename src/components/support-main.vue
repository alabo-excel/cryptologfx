<template>
  <div class="hello">
    <div class="hello p-9 px-20">
      <div class="pb-8 flex justify-between">
        <h1 class="pt-3 text-xs w-32 text-center bg-l-blue rounded-md text-white h-10">Create Ticket</h1>
        <div
          class="border-2 border-blue-300 w-7/12 text-center text-sm p-1 mb-5"
        >
        <span class="font-extrabold">Support E mail: </span>
          support@cryptologfx.com
        </div>
      </div>

      <div>
        <div
          class="flex justify-between bg-l-blue p-2 px-12 rounded-t-md text-white text-sm"
        >
          <div class="flex">
            <p>Tickets</p>
            <input class="h-5 w-4 ml-6 my-auto" type="checkbox">
          </div>
          <div class="pl-72">
            <p> Status</p>
          </div>
          <div>
            <p>Date Created</p>
          </div>
        </div>

        <div
          v-for="(noti, index) in notifs"
          :key="index"
          class="flex justify-between text-xs mb-0.5 p-2 py-3 bg-white px-12"
        >
          <div>
            <p>{{ noti.msg }}</p>
          </div>
          <div class="text-left">
            <p>{{ noti.status }}</p>
          </div>
          
          <div>
            <p>22-07-2020</p>
          </div>
          
        </div>

        <div class="font-bold flex justify-between mb-12 mt-7 text-sm">
          <p class="tl-blue">Show older Tickets</p>
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
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },
              { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Queued" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Pending" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Queued" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Pending" },
        { msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam", status: "Resolved" },

      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
