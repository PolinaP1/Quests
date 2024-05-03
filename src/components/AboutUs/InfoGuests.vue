<script>
import aboutus from '../../utils/aboutus.js';

export default {
    data() {
        return {
            aboutus: aboutus
        }
    },
}
</script>

<template>
    <div :class="[aboutus.img == 'Safety' ? 'flip__horizontal' : 'container__about']"
        v-for="(aboutus, index) in aboutus" :key="index">
        <div :class="[aboutus.img == 'Safety' ? 'flip__horizontal__about' : 'about']">
            <h2 class="about__title">{{ aboutus.title }}</h2>
            <h3 class="about__brevity"><span class="about__brevity__selection">Illuminous</span> {{ aboutus.brevity }}</h3>
            <ul class="about__descriptions">
                <li v-for="(descriptions, index) in aboutus.descriptions" :key="index">{{ descriptions.description }}</li>
            </ul>
        </div>
        <img :src="require(`@/img/${aboutus.img}.svg`)" :class="[aboutus.img == 'Safety' ? 'safey__img' : 'about__img']" />
    </div>
</template>

<style></style>