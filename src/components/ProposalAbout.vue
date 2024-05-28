<script>
import MyButton from './UI/MyButton.vue';

export default {
    // вызывается метод, в котором будет прописана функция для перехода на страницу "О нас"
    methods: {
        goToAboutUs() {
            // прописывается путь через $router.push
            this.$router.push('/About')
        }
    },
    components: {
        MyButton
    }
}
</script>

<template>
    <div class="proposal">
        <div class="proposal__container">
            <div class="proposal__text">
                <h4 class="proposal__text__postscript">Illuminous+</h4>
                <h2 class="proposal__text__title">Вся информация про Illuminous</h2>
                <h3 class="proposal__text__descripion">Узнайте нас получше</h3>
            </div>
            <nav class="proposal__nav">
                <ul class="proposal__nav__ul">
                    <li class="proposal__nav__li"><img src="@/img/People.svg" />Берите с собой всех друзей и родных</li>
                    <li class="proposal__nav__li"><img src="@/img/HighQuality.svg" />Профессиональные актеры</li>
                </ul>
                <ul class="proposal__nav__ul">
                    <li class="proposal__nav__li"><img src="@/img/Location.svg" />Расположение</li>
                    <li class="proposal__nav__li"><img src="@/img/BagMoney.svg" />Одни из лучших цен</li>
                </ul>
            </nav>
            <div class="proposal__watch">
                <!-- Команда @click вызывает функцию goToAboutUs -->
                <my-button @click="goToAboutUs">Посмотреть про нас</my-button>
            </div>
        </div>
    </div>
</template>

<style></style>