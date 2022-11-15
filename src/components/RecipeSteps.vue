<script setup lang="ts">
    
    const props = defineProps({
        step: Object
    })
</script>
<template>
    <div class="flex items-center mt-4">
        <div class="w-8 h-8 border-orange-400 border-2 rounded-full flex items-center justify-around text-white">
            {{ props?.step?.number || ''}}
        </div>
        <p class="text-white ml-5  w-full">{{ props?.step?.step }} </p>
    </div>
</template>