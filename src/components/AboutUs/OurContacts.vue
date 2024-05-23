<script>
import { reactive } from 'vue';
import SotialnetworkUi from '../UI/SotialnetworkUi.vue';

export default {
    data() {
        return {
            items: reactive([
                { description: 'Мы готовы ответить на любые ваши вопросы. ' },
                { description: 'Можете позвонить или написать нам прямо сейчас' }
            ]),
        }
    },

    components: {
        SotialnetworkUi
    }
}
</script>

<template>
    <div class="about">
        <div class="about__item">
            <div class="container__about">
                <div class="about__item">
                    <h2 class="about__item__title">Контакты</h2>
                    <ul class="about__item__descriptions">
                        <li v-for="item in items" :key="item.description">{{ item.description }}</li>
                    </ul>
                    <sotialnetwork-ui class="sotial__network__size" />
                </div>
                <img src="@/img/Contacts.svg" class="contacts__img" />
            </div>
        </div>
    </div>
</template>

<style></style>