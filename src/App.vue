<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import  axios  from 'axios';
import SearchBar from "./components/SearchBar.vue";
import router from './router';

async function search(val: string){ 
  console.log(val)
  router.push({path:'/search', query:{ query : val}})

}

const props = defineProps({
  searchResults : Array
})
const renderedResuls = ref(props.searchResults);
</script>

<template>
  <header class="fixed top-0 left-0 w-full">
    <div class="wrapper flex py-3 bg-orange-400 justify-between">
        <RouterLink class="text-white" to="/"><h1 class="text-2xl ml-2 w-1/3">VueTheMenue</h1></RouterLink>
        <div class="w-1/3">
          <SearchBar class="w-full " @changed="search"></SearchBar>
        </div>
        <nav class="flex w-1/3 justify-around">
          <RouterLink class="text-white" to="/about">About</RouterLink>
          <RouterLink class="text-white" to="/search">Search</RouterLink>
        </nav>
    </div>
  </header>

  <RouterView />
</template>

