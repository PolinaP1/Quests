<script>
export default {
    props: {
        findingsfiltering: {
            type: Object,
            required: true
        }
    },
    methods: {
        viewOptionClicked(inside) {
            this.$emit("viewOption", inside);
        }
    }
}
</script>

<template>
    <ul class="filtering__option">
        <li class="filtering__option__inside" v-for="inside in findingsfiltering.insides" :key="inside"
            :inside="inside" @click="viewOptionClicked(inside.inside)">{{ inside.inside }}</li>
    </ul>
</template>

<style></style>