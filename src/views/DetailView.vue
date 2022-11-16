<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, defineAsyncComponent } from 'vue';
import type { Ref } from 'vue';
import  axios  from "axios";
import type {Recipe} from '../Interfaces/Recipe';
var route = useRoute();
    console.log(route.params)

    const id = route.params.id;
    const recipe: Ref<any> = ref({});
    const steps: Ref<any> = ref({});
    onMounted(()=>{
        
        getRecipeData();
    })

    async function getRecipeData(){        
        [recipe.value, steps.value] = await Promise.all([
            axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`),
            axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${import.meta.env.VITE_API_KEY}`)
        ])

    }
</script>
<template>
    <div class="flex w-full">
        <div v-show="recipe.data !== undefined">
            <img  :src="recipe?.data?.image || ''"/>
        </div>      
        <div v-show="recipe.data === undefined" class="border border-blue-300 shadow rdark:border-gray-700 ounded-md p-6 max-w-sm w-full mx-auto animate-pulse">
            <div class="flex justify-center items-center mb-4 h-48 bg-gray-300 rounded dark:bg-gray-700">
                <svg class="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
            </div>
        </div>
        <div class="w-full" v-show="recipe.data !== undefined">
            <h1 class="text-white underline text-3xl decoration-orange-400 font-sans ml-4"> {{recipe?.data?.title || ''}} </h1>
            <div class="flex items-center">
                <img class="w-5 ml-4 mt-4" src="/time-left.png"> 
                <span class="text-white mt-4 ml-2">{{recipe?.data?.readyInMinutes || '' }} minutes</span>
                <span class="text-white mt-4 ml-2">{{recipe?.data?.servings || '' }} servings</span>
            </div>
            <div class="flex">
                <img v-if="recipe?.data?.glutenFree" class="w-8 ml-4 mt-4" src="/gluten-free.png"> 
                <img v-if="recipe?.data?.dairyFree" class="w-8 ml-4 mt-4" src="/dairy-free.png"> 
                <img v-if="recipe?.data?.vegan" class="w-8 ml-4 mt-4" src="/plant-based.png"> 
            </div>
            <div class="flex flex-col ml-4 mt-5">
                <h3 class="text-xl underline decoration-orange-400">Ingredient</h3>
                <ul class="list-disc pl-4">
                    <li class="text-white" v-for="ingredient in recipe?.data?.extendedIngredients">
                        <span class="font-bold">{{ingredient.amount}} {{ingredient.unit}}</span> of <span class="decoration-orange-400 underline">{{ingredient.name}}</span>
                    </li>
                   
                </ul>
            </div>
            <div class="flex flex-col ml-4 w-full">
                <h3 class="text-2xl underline decoration-orange-400">Steps</h3>
                <div v-show="steps.hasOwnProperty('data')" class="flex items-center mt-4" v-for="step in (steps.hasOwnProperty('data') ? steps.data[0].steps : []) ">
                    <div class="w-8 h-8 border-orange-400 border-2 rounded-full flex items-center justify-around text-white">
                        {{step.number}}
                    </div>
                    <p class="text-white ml-5  w-full">{{ step.step }} </p>
                </div>
            </div>
        </div>
        <div v-show="recipe.data === undefined" role="status" class="w-full animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>
