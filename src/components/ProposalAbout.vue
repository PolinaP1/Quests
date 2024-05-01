<script>

export default {
    methods: {
        goToAboutUs(){
            this.$router.push('/About')
        }
    },
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
            <button class="proposal__watch__button" @click="goToAboutUs">Посмотреть про нас</button>
        </div>
        </div>
    </div>
</template>

<style></style>