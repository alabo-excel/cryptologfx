<template>
  <div class="hello">
    <div class="hello lg:p-9 p-4` lg:px-20">
      <div class="pb-8 flex justify-between">
        <h1
          @click="showModal"
          class="pt-3 show-modal text-xs w-32 text-center bg-l-blue rounded-md text-white h-10"
        >
          Create Ticket
        </h1>
        <div
          class="border-2 border-blue-300 w-7/12 text-center text-sm p-1 mb-5"
        >
          <span class="font-extrabold">Support E mail: </span>
          support@cryptologfx.com
        </div>
      </div>

      <div>
        <div
          class="flex justify-between bg-l-blue p-2 lg:px-12 rounded-t-md text-white text-sm"
        >
          <div class="flex">
            <p class="my-auto">Tickets</p>
            <input class="h-5 w-4 ml-6 my-auto" type="checkbox" />
          </div>
          <div class="lg:pl-72 pl-40">
            <p>Status</p>
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
          <div class="">
            <p>{{ noti.msg }}</p>
          </div>
          <div class="text-left px-4">
            <p>{{ noti.status }}</p>
          </div>

          <div class="">
            <p>22-07-2020</p>
          </div>
        </div>

        <div class="font-bold flex justify-between mb-12 mt-7 text-sm">
          <p class="tl-blue">Show older Tickets</p>
          <p>Displaying 1-10 of 25</p>
        </div>
      </div>
    </div>

    <div
      class="modal h-screen w-full fixed left-0 top-0 flex justify-center bg-black bg-opacity-50 hidden"
    >
      <!-- modal -->
      <div class="bg-white rounded shadow-lg lg:w-5/12 h-96 mt-20">
        <!-- modal header -->
        <div class="px-4 py-2 flex justify-between items-center">
          <p class="font-extrabold text-lg mx-auto p-3">
            Create New Support Ticket
          </p>
          <button @click="closeModal" class="text-black close-modal">X</button>
        </div>
        <!-- modal body -->
        <div class="p-3">
          <div class="flex justify-center m-5">
            <span class="font-extrabold text-sm mr-6">Topic:</span>
            <input
              type="text"
              value="Pending deposit"
              class="p-2 border-2 border-blue-300 rounded-md"
            />
          </div>
          <div class="flex justify-center m-5">
            <span class="font-extrabold text-sm mr-6">Message:</span>
            <input
              type="text"
              value="Message"
              class="h-32 w-4/6 border-2 border-blue-300 rounded-md"
            />
          </div>
          <div class="text-center">
            <input
              @click="closeModal"
              type="button"
              value="Submit"
              class="close-modal bg-l-blue p-2 rounded-md text-white pr-8 pl-8"
            />
          </div>
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
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Queued"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Pending"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Queued"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Pending"
        },
        {
          msg:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam",
          status: "Resolved"
        }
      ]
    };
  },
  methods: {
    showModal() {
      const modal = document.querySelector(".modal");
      const showModal = document.querySelector(".show-modal");
      showModal.addEventListener("click", function() {
        modal.classList.remove("hidden");
      });
    },
    closeModal() {
      const modal = document.querySelector(".modal");

      const closeModal = document.querySelectorAll(".close-modal");
      closeModal.forEach(close => {
        close.addEventListener("click", function() {
          modal.classList.add("hidden");
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
