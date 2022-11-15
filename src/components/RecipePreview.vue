<script setup lang="ts">
    const props = defineProps({
        recipe: Object
    })
</script>

<template>
    <div class="flex">
        <div class="w-10 h-10 rounded-full overflow-hidden">
            <img :src="props?.recipe?.image ||''" />
        </div>
        <h3 class="text-md">{{props?.recipe?.title || ''}}</h3>
    </div>
</template>