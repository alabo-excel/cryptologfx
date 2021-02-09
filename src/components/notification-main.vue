<template>
  <div class="hello">
    <div class="hello p-9 px-20">
      <div class="pb-8">
        <h1>MESSAGES</h1>
      </div>
      <div>
        <div class="flex justify-between bg-l-blue p-2 rounded-t-md text-white text-sm">
          <div class="flex">
            <input class="h-4 w-4 mx-6" type="checkbox" />
            <p>Message</p>
          </div>
          <div>
            <p>Receive Date</p>
          </div>
        </div>

        <div v-for="(noti, index) in notifs" :key="index" class="flex justify-between  mb-0.5 p-2 py-3 bg-white text-sm">
          <div class="flex">
            <input class="h-4 w-4 mx-6" type="radio" />
            <p>{{noti.msg}}</p>
          </div>
          <div>
            <p>22-07-2020</p>
          </div>
        </div>

        <div class="font-bold flex justify-between mb-12 mt-7 text-sm">
          <p class="tl-blue">Show older Messages </p>
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
  return{
    notifs: [
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
      {msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"},
    ]
  } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
