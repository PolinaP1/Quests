<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
}
</script>

<template>
    <div class="legend">
        <div class="legend__item">
            <div class="legend__item__history">
                <h1 class="legend__item__history__title">История</h1>
                <h2 class="legend__item__history__description">{{ todo.description }}</h2>
            </div>
            <div class="legend__item__atmosphere">
                <h1 class="legend__item__atmosphere__title">Атмосфера</h1>
                <div class="legend__item__atmosphere__focus">
                    <img src="@/img/logoBeginning.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    
</style>