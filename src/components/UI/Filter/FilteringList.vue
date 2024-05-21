<script>
import findingsfiltering from '../../../utils/findingsfiltering.js';
import FilteringItem from './FilteringItem.vue';
export default {
    data() {
        return {
            findingsfiltering: findingsfiltering,
            selectedSort: ''
        }
    },

    components: {
        FilteringItem
    },

    mounted() {
        console.log(this.selectedSort)
    },

}
</script>

<template>
    <div class="filtering__quests">
        <div class="filtering">
            <h2 class="filtering__title">Найдите подходящий квест</h2>
            <h2 class="filtering__description">По критериям можно найти лучший для вас вариант</h2>
            <filtering-item v-model="selectedSort" v-for="findingsfiltering in findingsfiltering" :key="findingsfiltering.id" :findingsfiltering="findingsfiltering" />
        </div>
    </div>
</template>

<style></style>