<script>
import MyButton from '../MyButton.vue';

export default {
    data() {
        return {
            items: [1, 2, 3, 4, 5],
        }
    },
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
    <div class="quest__item">
        <h1 class="quest__item__title">{{ todo.name }}</h1>
        <div class="quest__item__complexity">
            <h2 class="quest__item__complexity__title">Сложность:</h2>
            <div v-for="item in items" :key="item"> <img v-if="item <= todo.complexity_quest.complexity" src='../../../img/GhostTrue.svg' /> <img v-else src='../../../img/GhostFalse.svg'/> </div>
            <h2>{{ todo.age_quest.age }}</h2>
        </div>
        <my-button>Бронировать</my-button>
    </div>
</template>

<style></style>