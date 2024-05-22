<script>
export default {
    data() {
        return {
            name: 'my-button'
        }
    },
}
</script>

<template>
    <button class="my__button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style>

</style>