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
    <div class="demonstration">
        <img :src="require(`@/img/${todo.img}.svg`)" class="demonstration__img" />
        <div class="demonstration__data">
            <img :src="require(`@/img/${todo.title_img}.svg`)" class="demonstration__data__show" />
            <div class="demonstration__data__definition">
                <h1 class="demonstration__data__definition__title">{{ todo.name }}</h1>
                <div class="demonstration__data__definition__view">
                    <img src="@/img/QuestSeparation.svg">
                    <h2>{{ todo.view_quest.view }}</h2>
                    <img src="@/img/QuestSeparation.svg">
                </div>
                <h2 class="demonstration__data__definition__description">Подходит ли вам этот квест? Для ответа на
                    вопрос посмотрите его характеристики и свободные даты бронирования. Но помните, что данный квест
                    содержит в себе много загадок... Окунитесь в его историю и узнаете с чем <span
                        class="demonstration__data__definition__description__span">или с кем</span> вам придется
                    столкнуться.</h2>
            </div>
        </div>
    </div>
</template>

<style></style>