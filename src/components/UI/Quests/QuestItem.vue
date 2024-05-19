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
        <img :src="require(`@/img/${todo.img}.svg`)" class="quest__item__img"/>
        <div class="quest__item__information">
            <h1 class="quest__item__information__title">{{ todo.name }}</h1>
            <div class="quest__item__information__complexity">
                <h2 class="quest__item__information__complexity__title">Сложность:</h2>
                <div v-for="item in items" :key="item"> <img class="quest__item__information__complexity__icon"
                        v-if="item <= todo.complexity_quest.complexity" src='../../../img/GhostTrue.svg' /> <img
                        class="quest__item__information__complexity__icon" v-else src='../../../img/GhostFalse.svg' />
                </div>
                <div class="quest__item__information__complexity__separation">
                    <img src="@/img/QuestSeparation.svg" />
                    <h2>{{ todo.age_quest.age }}</h2>
                </div>
            </div>
            <my-button>Бронировать</my-button>
        </div>
    </div>
</template>

<style></style>