<script>
import { reactive } from 'vue';

export default {
    data() {
        return {
            items: reactive([
                { description: 'Продумываем каждый шаг.' },
                { description: 'Разрабатываем оригинальный сценарий.' },
                { description: 'Строим просторные и продуманные локации.' }
            ]),
        }
    },
}
</script>

<template>
    <div class="container_about">
        <div class="about">
            <h2 class="about__title">Уникальные квесты</h2>
            <h3 class="about__brevity"><span class="about__brevity__selection">Illuminous</span> - увлекательные приключения </h3>
            <ul class="about__descriptions">
                <li v-for="item in items" :key="item.description">{{ item.description }}</li>
            </ul>
        </div>
        <img src="@/img/UniqueGuests.svg" class="about__img"/>
    </div>
</template>

<style>

</style>