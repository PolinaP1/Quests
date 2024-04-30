<script>
import { reactive } from 'vue';

export default {
    data() {
        return {
            items: reactive([
                { description: 'Каждый квест проходит высокую проверку перед запуском.' },
                { description: 'Мы соблюдаем все противопожарные и санитарные требования.' }
            ]),
        }
    },
}
</script>

<template>
    <div class="container_about">
        <img src="@/img/Safety.svg" class="safey__img"/>
        <div class="about">
            <h2 class="about__title">Безопасность</h2>
            <h3 class="about__brevity"><span class="about__brevity__selection">Illuminous</span> - здоровье клиентов </h3>
            <ul class="about__descriptions">
                <li v-for="item in items" :key="item.description">{{ item.description }}</li>
            </ul>
        </div>
        
    </div>
</template>

<style>

</style>