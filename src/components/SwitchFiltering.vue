<script>
export default {

    methods:{
        openQuestsClicked(){
            this.$router.push('/Quests')
        }
    }

}
</script>

<template>
    <div class="switch">
        <div class="switch__information">
            <h2 class="switch__information__title">Найдите подходящий квест</h2>
            <h2 class="switch__information__description">Подберите для себя лучший вариант  квеста с помощью критериев.</h2>
            <button class="switch__information__button" @click="openQuestsClicked">Определить квест по критериям</button>
        </div>
    </div>
</template>

<style></style>