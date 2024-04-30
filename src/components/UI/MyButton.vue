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
    <button>
        <slot></slot>
    </button>
</template>

<style>
button {
    background: red;
    border-radius: 36px;
    color: white;
    width: 158px;
    height: 50px;
    font-size: 16px;
    gap: 10px;
}
</style>