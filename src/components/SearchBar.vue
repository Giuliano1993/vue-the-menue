<script>
import { defineComponent } from 'vue';
export default defineComponent({
    components: {

    },
    data : ()=>{
        return{
            searchString : '',
            results: []
        }
    }

})
</script>

<template>
    <input :model="searchString" type="text" class="rounded-lg h-6 bg-orange-300 focus:bg-orange-100 focus-visible:border-orange-600 text-black py-6 pl-2" placeholder="Search ingredients..."/>
</template>