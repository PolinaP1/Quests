<!-- <script>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
export default {
    props:{
        modelValue:{
            type: String
        },
        options:{
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event)
        }
    },
}
</script>

<template>
    <EjsCombobox v-model="modelValue" @change="changeOption">
        <option disabled value="">Тип</option>
        <option v-for="option in options" :key="option.value" value="option.value"></option>
        {{ option.name }}
    </EjsCombobox>
</template>

<style>
    
</style> -->