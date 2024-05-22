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
            if (this.visibleOptions == false) {
                this.visibleOptions = true;
            }
            else {
                this.visibleOptions = false;
            }

        },

        clearFilter() {
            this.selectedSort = '';
            this.$emit('handleGettingData', '', this.findingsfiltering.designation);
        },

        viewOption(inside) {
            this.selectedSort = inside;
            this.$emit('handleGettingData', inside, this.findingsfiltering.designation);
        }
    }
}
</script>

<template>
    <div class="filtering__information" @click="openOptions()">
        <div class="filtering__information__select">
                <img :src="require(`@/img/${findingsfiltering.img}.svg`)" />
                <h2>{{ selectedSort ? selectedSort : findingsfiltering.designation }}</h2>
            <button class="filtering__information__button" @click="clearFilter('')">
                <img src="@/img/CancelFiltering.svg" />
            </button>
        </div>
        <div class="filtering__information__options" v-if="visibleOptions">
            <filtering-option :findingsfiltering="findingsfiltering" @viewOption="viewOption" />
        </div>
    </div>
</template>

<style></style>