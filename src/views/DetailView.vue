<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, defineAsyncComponent } from 'vue';
import  axios  from "axios";
import type {AxiosRequest} from '../Interfaces/AxiosRequest'
var route = useRoute();
    console.log(route.params)

    const id = route.params.id;
    const recipe = ref({});
    const steps = ref({});
    onMounted(()=>{
        console.log('ehilo')
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
  <main class="w-full mt-20">
    <div class="flex w-full">
        <div>
            <img  :src="recipe?.data?.image || ''"/>
        </div>
        <div class="w-full">
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
    </div>
  </main>
</template>
