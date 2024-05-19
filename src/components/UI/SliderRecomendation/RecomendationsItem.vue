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
    <div>
        <img :src="require(`@/img/${todo.img}.svg`)" class="recomendation__img">
        <div class="container__recomendation">
            <div class="recomendation">
                <h4 class="recomendation__postscript">------- Выбор Illuminous</h4>
                <h2 class="recomendation__title">{{ todo.name }}</h2>
                <h3 class="recomendation__descripion">{{ todo.description }}</h3>
                <my-button>Подробнее<img src="@/img/Detailed.svg" /></my-button>
            </div>
        </div>
    </div>
</template>

<style></style>