<script setup lang="ts">
    const props = defineProps({
        recipe: Object
    })
    const emits = defineEmits<{
        (e: 'pickedItem', item: Object) : void
    }>()
    function foodSelected(){
        emits('pickedItem',props?.recipe || {} );
    }
</script>

<template>
    <div class="flex bg-gray-200 border-b-orange-400 border-b-4 text-black items-center py-1 cursor-pointer" @click="foodSelected">
        <div class="ml-2 w-10 h-10 rounded-full overflow-hidden bg-center bg-cover " :style="`background-image: url(${props?.recipe?.image ||''})`">
        </div>
        <h3 class="text-md ml-3">{{props?.recipe?.title || ''}}</h3>
    </div>
</template>