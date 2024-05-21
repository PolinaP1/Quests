<script>
export default {
data() {
    return {
        filtering: {
            type: String,
        }
    }
},

    props:{
        findingsfiltering:{
            type: Object,
            reguired: true
        }
    },

    methods: {
        changeOption(event){
            this.$emit('update:filtering', event.target.value);
            console.log(this.filtering)
        }
        
    }
}
</script>

<template>
    <select v-model="filtering" @change="changeOption">
        <option selected disabled :value="findingsfiltering.designation">{{ findingsfiltering.designation }}</option>
        <option :value="inside.inside" v-for="inside in findingsfiltering.insides" :key="inside" :inside="inside">{{ inside.inside }}</option>
    </select>
</template>

<style>
    
</style>