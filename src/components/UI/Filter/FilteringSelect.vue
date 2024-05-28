<script>
import FilteringOption from './FilteringOption.vue';

export default {
    data() {
        return {
            visibleOptions: false,
            selectedSort: ''
        }
    },

    props: {
        updateFilter: {
            type: Boolean
        },
        findingsfiltering: {
            type: Object,
            required: true
        }
    },

    components: {
        FilteringOption
    },

    watch: {
        updateFilter: {
            handler(newVal, oldVal) {
                if (newVal !== oldVal) {
                    this.selectedSort = '';
                }
            },
            immediate: true,
        },
    },

    methods: {

        openOptions() {
            this.visibleOptions = !this.visibleOptions;

        },

        clearFilter() {
            this.selectedSort = '';
            this.$emit('handleGettingData', '', this.findingsfiltering.designation);
        },
        // описывается функция, которая получает данные из дочернего компонента
        viewOption(inside) {
            //переменная, указанная с базовым значением пустого поля, приравнивается к полученным данным
            this.selectedSort = inside;
            //полученные данные передаются к родительскому компоненту
            this.$emit('handleGettingData', inside, this.findingsfiltering.designation);
        }
    }
}
</script>

<template>
    <div class="filtering__information" @click="openOptions()">
        <div class="filtering__information__select">
                <img :src="require(`@/img/${findingsfiltering.img}.svg`)" />
                <!-- используется условие, которое будет выдавать данные в выпадающий список -->
                <h2>{{ selectedSort ? selectedSort : findingsfiltering.designation }}</h2>
            <button class="filtering__information__button" @click="clearFilter('')">
                <img src="@/img/CancelFiltering.svg" />
            </button>
        </div>
        <div class="filtering__information__options" v-if="visibleOptions">
            <!-- передается функция, которая в дочернем компоненте передает значения в родительский -->
            <filtering-option :findingsfiltering="findingsfiltering" @viewOption="viewOption" />
        </div>
    </div>
</template>

<style></style>