<script lang="ts">
import { defineComponent, ref } from 'vue';
import RecipePreview from '../components/RecipePreview.vue';
import recipes from '../sampleJsons/pastaSimple.json';
import axios from 'axios';
import router from '../router';
import type { Recipe } from '../Interfaces/Recipe.ts';

    export default defineComponent({
        setup: ()=>{
        
        },
        data: () => {
            return{
                //searchResults: [],
                searchResults: recipes,
                searchQuery : ''
            }
        },
        components: {
            RecipePreview
        },
        updated: async function(){
            var prevQuery = this.searchQuery;
            this.searchQuery = (this.$route.query.query != null && !Array.isArray(this.$route.query.query)) ? this.$route.query.query : '';
            if(this.searchQuery == '' || this.searchQuery == prevQuery) return ;
            this.doSearch()
        },
        methods: {
            async doSearch(){
                //var res = await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=${this.searchQuery}&apiKey=${import.meta.env.VITE_API_KEY}`);
                //this.searchResults = res.data.menuItems;

                // https://api.spoonacular.com/recipes/complexSearch?query=pasta&addRecipeInformation=true&addRecipeNutrition=true&addRecipeInformation=true&fillIngredients=true&apiKey=ded8d248f003427c995791e7d3595ffb
            },
            getDetails(recipe: Recipe){
                //console.log(recipe)
                router.push({name:'recipe-detail', params:{ id : recipe.id}})
                //getRecipeById
                //https://api.spoonacular.com/recipes/{id}/information
            }
        }

    })
</script>
<template>
    <h1 class="text-2xl">You Searched: </h1>
    <h2 class="text-xl">{{searchQuery}}</h2>
    <div >
        <RecipePreview v-for="res in searchResults" :recipe="res" :key="res.id" @pickedItem="getDetails"></RecipePreview>
    </div>
    
</template>

