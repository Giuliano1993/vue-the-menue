<script lang="ts">
import { defineComponent, ref,defineAsyncComponent } from 'vue';
import RecipePreview from '../components/RecipePreview.vue';
import axios from 'axios';
import type { Recipe } from '../Interfaces/Recipe';

    export default defineComponent({
        setup: ()=>{
        },
        data: () => {
            return{
                //searchResults: recipes,
                searchResults: [],
                searchQuery : ''
            }
        },
        components: {
            RecipePreview 
        },
        mounted: async function(){
            this.doSearch()
        },
        updated: async function(){
            this.doSearch()
        },
        methods: {
            async doSearch(){
                var prevQuery = this.searchQuery;
                this.searchQuery = (this.$route.query.query != null && !Array.isArray(this.$route.query.query)) ? this.$route.query.query : '';
                if(this.searchQuery == '' || this.searchQuery == prevQuery) return ;
                var res = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${this.searchQuery}&addRecipeInformation=true&apiKey=${import.meta.env.VITE_API_KEY}`);
                console.log(res)
                this.searchResults = res.data.results;
            },
            getDetails(recipe: Recipe){
                this.$router.push({name:'recipe-detail', params:{ id : recipe.id}})
            }
        }

    })
</script>
<template>
    <div class="w-full text-center">
        <h1 class="text-2xl text-orange-400 font-bold">You Searched: </h1>
        <h2 class="text-xl text-white">{{searchQuery}}</h2>
    </div>
    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RecipePreview v-show="searchResults" v-for="res in searchResults" :recipe="res" @pickedItem="getDetails"></RecipePreview>
    </div>
    
</template>

