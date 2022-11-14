<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import SearchBar from "./components/SearchBar.vue";
</script>

<template>
  <header class="fixed top-0 left-0 w-full">
    <div class="wrapper flex py-3 bg-orange-400 justify-between">
        <h1 class="text-2xl ml-2 w-1/3">VueTheMenue</h1>
        <div class="w-1/3">
          <SearchBar class="w-full "></SearchBar>
        </div>
        <nav class="flex w-1/3 justify-around">
          <RouterLink class="text-white" to="/">Home</RouterLink>
          <RouterLink class="text-white" to="/about">About</RouterLink>
        </nav>
    </div>
  </header>

  <RouterView />
</template>

