<script>
import findingsfiltering from '../../../utils/findingsfiltering.js';
import FilteringSelect from './FilteringSelect.vue';
export default {
    data() {
        return {
            findingsfiltering: findingsfiltering,
        }
    },

    methods: {

        handleGettingData(info, type){
            this.$emit("handleGettingData", info, type)
        }

    },

    components: {
        FilteringSelect
    },

}
</script>

<template>
    <div class="filtering">
        <div class="filtering__quests">
            <h2 class="filtering__title">Найдите подходящий квест</h2>
            <h2 class="filtering__description">По критериям можно найти лучший для вас вариант</h2>
            <div class="filtering__item">
                <filtering-select v-for="findingsfiltering in findingsfiltering" :key="findingsfiltering.id"
                    :findingsfiltering="findingsfiltering" @handleGettingData="handleGettingData"/>
            </div>
        </div>
    </div>
</template>

<style></style>