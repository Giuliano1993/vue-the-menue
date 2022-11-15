<script setup lang="ts">
    import type { Recipe } from '../Interfaces/Recipe';
    const props = defineProps({
        recipe: {}
    })
    const emits = defineEmits<{
        (e: 'pickedItem', item: Recipe) : void
    }>()
    function foodSelected(){
        emits('pickedItem',props?.recipe || {} );
    }
</script>

<template>
    <div @click="foodSelected" class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1 cursor-pointer">
        <figure>
            <!-- Image -->
            <img :src="(props?.recipe?.image ||'') + '?auto=format&fit=crop&w=400&q=50'" class="rounded-t h-72 w-full object-cover" />
            <figcaption class="p-4">
                <p class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"  x-text="post.title">
                    {{props?.recipe?.title || ''}}
                </p>

                <!-- Description -->
                <small
                    class="leading-5 text-gray-500 dark:text-gray-400" x-text="post.description" v-html="props?.recipe?.summary.substring(0,100) + '...' || ''">
                    
                    
                </small>
            </figcaption>
        </figure>
    </div>
</template>


       