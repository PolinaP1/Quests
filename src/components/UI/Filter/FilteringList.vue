<script>
// данные утилиты импортируются
import findingsfiltering from '../../../utils/findingsfiltering.js';
import FilteringSelect from './FilteringSelect.vue';
export default {
    data() {
        return {
            findingsfiltering: findingsfiltering,
        }
    },

    methods: {
        // описывается функция, которая получает данные из дочернего компонента
        handleGettingData(info, type) {
            // полученные данные передаются в родительский компонент. Указывается, какие данные он должен принимать
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
                <!-- передается функция, которая в дочернем компоненте передает значения в родительский -->
                <filtering-select v-for="findingsfiltering in findingsfiltering" :key="findingsfiltering.id"
                    :findingsfiltering="findingsfiltering" @handleGettingData="handleGettingData" />
            </div>
        </div>
    </div>
</template>

<style></style>