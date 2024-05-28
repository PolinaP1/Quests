<script>
export default {
    //передача данных, вызванных в родительском компоненте
    props: {
        findingsfiltering: {
            type: Object,
            required: true
        }
    },
    methods: {
        //функция передачи данных в родительский компонент
        viewOptionClicked(inside) {
            this.$emit("viewOption", inside);
        }
    }
}
</script>

<template>
    <ul class="filtering__option">
        <!-- по нажатию на элемент маркированного списка осуществляется функция -->
        <li class="filtering__option__inside" v-for="inside in findingsfiltering.insides" :key="inside"
            :inside="inside" @click="viewOptionClicked(inside.inside)">{{ inside.inside }}</li>
    </ul>
</template>

<style></style>