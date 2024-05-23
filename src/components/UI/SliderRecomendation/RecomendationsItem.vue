<script>
import MyButton from '../../UI/MyButton.vue';

export default {
    props: {
        todo: {
            type: Object,
            required: true,
        }
    },

    components: {
        MyButton
    }
}
</script>

<template>
    <div class="slide" v-if="todo">
        <img :src="require(`@/img/${todo.img}.svg`)" class="recomendation__img">
        <div class="container__recomendation">
            <div class="recomendation">
                <h4 class="recomendation__postscript">------- Выбор Illuminous</h4>
                <h2 class="recomendation__title">{{ todo.name }}</h2>
                <h3 class="recomendation__descripion">{{ todo.description }}</h3>
                <my-button @click="$router.push(`/Quest/${todo.id}`)">Подробнее<img src="@/img/Detailed.svg" /></my-button>
            </div>
        </div>
    </div>
    <h1 v-else>YTvn</h1>
</template>

<style></style>