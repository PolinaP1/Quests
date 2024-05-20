<script>
export default {
    data() {
        return {
            name: 'arrow-slider-button'
        }
    },
}
</script>

<template>
    <button class="arrow__slider" @click="$emit('click')">
        <img src="@/img/Arrow.svg"/>
    </button>
</template>

<style>

</style>