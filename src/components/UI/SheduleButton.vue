<script>
export default {
    name: 'shedule-button'
}
</script>

<template>
    <button class="shedule__button" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style>
    
</style>