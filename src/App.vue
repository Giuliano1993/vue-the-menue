<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView, useRoute } from "vue-router";
import  axios  from 'axios';
import SearchBar from "./components/SearchBar.vue";
import router from './router';


const route = useRoute();
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <div class="wrapper flex py-3 bg-orange-400 justify-between">
      <div class="w-1/3">
        <RouterLink class="text-white" to="/"><h1 class="text-2xl ml-2 w-1/3">VueTheMenue</h1></RouterLink>
        </div>
        <div class="w-1/3">
          <SearchBar v-if="route.name != 'home'" class="w-full " ></SearchBar>
        </div>
        <nav class="flex w-1/3 justify-around">
          <!--<RouterLink class="text-white" to="/search">Search</RouterLink> -->
        </nav>
    </div>
  </header>
  <main class="w-full pt-20">
    <RouterView/>
  </main>
</template>

<style>
body{
  background-image: url('./food-gfbe6230b2_1920.jpeg')!important;
  background-repeat: no-repeat!important;
  background-size: cover!important;
  background-position: center center!important;
}
</style>