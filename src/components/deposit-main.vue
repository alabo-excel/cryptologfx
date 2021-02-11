<template>
  <div class="hello">
    <div class="hello lg:p-9 p-4 lg:px-20">
      <div class="pb-8 flex justify-between">
        <h1
          @click="showModal"
          class="pt-3 show-modal text-xs w-44 text-center bg-l-blue rounded-md text-white h-10"
        >
          Make Deposit
        </h1>
      </div>

      <div class="overflow-x-auto">
        <div
          class="flex diff justify-between bg-l-blue p-2 pr-44 px-12 rounded-t-md text-white text-sm"
        >
          <div class="flex">
            <p>ID</p>
          </div>
          <div class="px-3">
            <p>Amount Requested</p>
          </div>
          <div class="px-3">
            <p>Amount + charges</p>
          </div>
          <div class="px-3">
            <p>Receiving mode</p>
          </div>
          <div class="px-3">
            <p>Status</p>
          </div>
          <div class="px-3">
            <p>Date Created</p>
          </div>
        </div>

        <div
          v-for="(noti, index) in notifs"
          :key="index"
          class="flex diff justify-between text-xs mb-0.5 p-2 py-3 bg-white px-12"
        >
          <div>
            <p>{{ noti.id }}</p>
          </div>
          <div class="px-3">
            <p>1,500.00</p>
          </div>
          <div class="px-3">
            <p>1,600.00</p>
          </div>
          <div class="px-3">
            <p>Bitcoin</p>
          </div>
          <div class="px-3">
            <p>Processed</p>
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

    <div
      class="modal h-screen w-full fixed left-0 top-0 flex justify-center bg-black bg-opacity-50 hidden"
    >
      <!-- modal -->
      <div class="bg-white p-4 rounded shadow-lg lg:w-5/12 h-64 mt-20">
        <!-- modal header -->
        <div class="px-4 py-2 flex justify-between items-center">
          <p class="font-extrabold text-lg mx-auto p-3">
              Make New Deposit
          </p>
          <button @click="closeModal" class="text-black close-modal">X</button>
        </div>
        <!-- modal body -->
        <div class="p-3">
          <div class="flex justify-center m-5">
            <input
              type="text"
              value="Enter amount here"
              class="p-2 border-2 border-blue-300 rounded-md w-72"
            />
          </div>
          <div class="text-center my-3">
            <input
              @click="closeModal"
              type="button"
              value="Continue"
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
          id: 11025
        },
        {
          id: 11025
        },
        {
          id: 11025
        },
        {
          id: 11025
        },
        {
          id: 11025
        },

        {
          id: 11025
        },
        {
          id: 11025
        },
        {
          id: 11025
        },

        {
          id: 11025
        },
        {
          id: 11025
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
@media (max-width: 400px) {
  .diff{
    width: 150%;
  }
}
</style>
