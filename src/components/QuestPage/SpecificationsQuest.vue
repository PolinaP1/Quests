<script>
export default {
    data() {
        return {
            items: [1, 2, 3, 4, 5]
        }
    },

    props: {
        todo: {
            type: Object,
            required: true,
        }
    },
}
</script>

<template>
    <div class="specifications">
        <div class="specifications__item">
            <div class="specifications__item__complexity">
                <div class="specifications__item__complexity__title">
                    <h2 class="specifications__item__text">Страшность</h2>
                </div>
                <div class="specifications__item__complexity__icons">
                    <div v-for="item in items" :key="item" class="specifications__item__complexity__icons__icon">
                        <img v-if="item <= todo.complexity_quest.complexity" src='@/img/GhostTrue.svg' />
                        <img v-else src='@/img/GhostFalse.svg' />
                    </div>
                </div>
            </div>
            <div class="specifications__item__actors">
                <div class="specifications__item__actors__title">
                    <h2 class="specifications__item__text">Актеры</h2>
                </div>
                <div class="specifications__item__reply" v-if="todo.type_quest.type == 'С актерами'">
                    <h3>Да</h3>
                </div>
                <div class="specifications__item__reply" v-else>
                    <h3>Нет</h3>
                </div>
            </div>
            <div class="specifications__item__playersage">
                <div class="specifications__item__playersage__title">
                    <h2 class="specifications__item__text">Игроки</h2>
                </div>
                <h2 class="specifications__item__reply">2 - {{ todo.number_of_players_quest.number_of_players }}</h2>
            </div>
            <div class="specifications__item__playersage">
                <div class="specifications__item__playersage__title">
                    <h2 class="specifications__item__text">Возраст</h2>
                </div>
                <h2 class="specifications__item__reply">{{ todo.age_quest.age }}</h2>
            </div>
        </div>
    </div>
</template>

<style></style>