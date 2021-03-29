<template>
  <div class="container">
    <div class="text-center py-4 bg-green-500 text-white font-extrabold shadow-lg">
      <p>visit <a class="text-black" href="https://intense-eyrie-90071.herokuapp.com/admin/"> here </a> to Add your todo lists</p>
    </div>
    <div class="pt-20 p-4 sm:p-40">
   <div class="flex flex-col text-center w-full mb-12">
      <h1 class="text-4xl sm:text-6xl font-medium title-font mb-4 text-gray-900 -mt-10">Your personal todo list</h1>
      <p class="px-20 lg:w-2/3 text-sm text-gray-400 mx-auto leading-relaxed text-base">Boost your productivy by using this free todo app</p>
    </div>
     <div class="p-4  bg-green-500 rounded-lg">
        <div
        class="w-full text-white bg-green-500 "
        v-for="(message,index) in messages"
        v-bind:key="message.id"
      >
        <div
          class="container flex items-center justify-between px-6 py-4 mx-auto"
        >
          <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
              <path
                d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
              ></path>
            </svg>

            <p class="mx-3">{{ message.greetings }}</p>
          </div>

          <button
            class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none"
             @click="abc(index)"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import { messageQuery } from "~/graphql/query";

export default {
  data() {
    return {
      messages: [],
      index: "0",
    };
  },
  apollo: {
    messages: {
      prefetch: true,
      query: messageQuery
    }
  },
    props: {
    
  },
  methods: {
    abc(id){
      // console.log("hhhhhhhhhhhhhhhhhhh");
      this.messages.splice(id,1)
    }
  }

};
</script>














