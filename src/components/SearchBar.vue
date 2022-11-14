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
    },
    methods: {
        searchIngredients(){
            if(this.searchString != '') this.$emit('changed', this.searchString)
        }
    }

})
</script>

<template>
    <input @change="searchIngredients()" v-model="searchString" type="text" class="rounded-lg h-6 bg-orange-300 focus:bg-orange-100 focus-visible:border-orange-600 text-black py-6 pl-2" placeholder="Search ingredients..."/>
</template>