<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';
import cuisines from '../dataJson/cuisines.json';
import diets from '../dataJson/diets.json';
import intolerances from '../dataJson/intolerances.json';
export default defineComponent({
    components: {

    },
    data : ()=>{
        return{
            searchString : '',
            results: [],
            showAdvanced: false,
            cuisines: cuisines,
            diets: diets,
            intolerances: intolerances,
            showCuisine: false,
            showDiets: false,
            showIntolerances: false
        }
    },
    methods: {
        searchIngredients(){
            router.push({path:'/search', query:{ query : this.searchString}})
        },
        showAdvancedSearch(){
            this.showAdvanced = !this.showAdvanced;
        }
    }

})
</script>

<template>
    <div class="relative mx-auto overflow-hidden">
        <div>
            <input @change="searchIngredients()" v-model="searchString" type="text" class="w-full rounded-lg h-6 z-10 bg-orange-300 focus:bg-orange-100 focus-visible:border-orange-600 text-black py-6 pl-2 placeholder-gray-600 text-lg z-100" placeholder="Search dish name, ingredients etc..."/>
            <button class="absolute right-0 top-0 text-black border-orange-400 border-l-2 h-full px-6 z-10" @click="()=>{showAdvanced = !showAdvanced;}">Advanced Search</button>
        </div>
        <div :class="showAdvanced ? 'w-full bg-orange-300 text-white  z-3 slide-in-top' : 'w-full bg-orange-300 text-white hidden z-3' " ref="advancedSearchMenu">
            <div grid="">
                <div class="col-span-3">
                    
                    Parametri ricerca avanzata
                    
                </div>
                <div class="flex">
    
                    <div class="col-span-1 my-1 flex-grow">
                        <button @click="()=>{showCuisine = !showCuisine;}" id="dropdownSearchCuisineButton" data-dropdown-toggle="dropdownSearchCuisine" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Filter Cuisines <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div v-show="showCuisine" id="dropdownSearchCuisine" class="z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
                            <ul class="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchCuisineButton">
                            <li v-for="cuisine in cuisines">
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked :id="'checkbox-'+cuisine" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label :for="'checkbox-'+cuisine" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{cuisine}}</label>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-1 my-1 flex-grow">
                        <button @click="()=>{showDiets = !showDiets;}" id="dropdownSearchDietButton" data-dropdown-toggle="dropdownSearchDiet" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Filter Diets <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div v-show="showDiets" id="dropdownSearchDiet" class="z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
                            <ul class="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchDietButton">
                            <li v-for="diet in diets">
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input checked :id="'checkbox-'+diet" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label :for="'checkbox-'+diet" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{diet}}</label>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-span-1 my-1 flex-grow">
                        <button @click="()=>{showIntolerances=!showIntolerances;}" id="dropdownSearchIntoleranceButton" data-dropdown-toggle="dropdownSearchIntolerance" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Pick Intolerances <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                        <div v-show="showIntolerances" id="dropdownSearchIntolerance" class="z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
                            <ul class="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchIntoleranceButton">
                            <li v-for="intolerance in intolerances">
                                <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                <input :id="'checkbox-'+intolerance" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                <label :for="'checkbox-'+intolerance" class="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">{{intolerance}}</label>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
    
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
    .slide-in-top {
	-webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    /* ----------------------------------------------
 * Generated by Animista on 2022-11-19 19:24:30
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

</style>