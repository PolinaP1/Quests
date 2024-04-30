<script>
import { reactive } from 'vue';

export default {
    data() {
        return {
            items: reactive([
                { description: 'Всегда рады помочь.' },
                { description: 'Актеры - ваши друзья и команда.' },
                { description: 'Любим пощекотать нервы, но всегда окажем поддержку.' }
            ]),
        }
    },
}
</script>

<template>
    <div class="container_about">
        <div class="about">
            <h2 class="about__title">Дружная команда</h2>
            <h3 class="about__brevity"><span class="about__brevity__selection">Illuminous</span> - доброжелательность </h3>
            <ul class="about__descriptions">
                <li v-for="item in items" :key="item.description">{{ item.description }}</li>
            </ul>
        </div>
        <img src="@/img/FriendlyTeam.svg" class="about__img"/>
    </div>
</template>

<style>

</style>