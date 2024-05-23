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
    <div class="about">
        <div class="about__item">
            <div :class="[aboutus.img == 'Safety' ? 'about__flip' : 'container__about']" v-for="aboutus in aboutus"
                :key="aboutus">
                <div :class="[aboutus.img == 'Safety' ? 'about__flip__horizontal' : 'about__item']">
                    <h2 class="about__item__title">{{ aboutus.title }}</h2>
                    <h3 class="about__item__brevity"><span class="about__item__brevity__selection">Illuminous</span> {{ aboutus.brevity }}</h3>
                    <ul class="about__item__descriptions">
                        <li v-for="descriptions in aboutus.descriptions" :key="descriptions">{{ descriptions.description
                            }}
                        </li>
                    </ul>
                </div>
                <img :src="require(`@/img/${aboutus.img}.svg`)"
                    :class="[aboutus.img == 'Safety' ? 'safey__img' : 'about__img']" />
            </div>
        </div>
    </div>
</template>

<style></style>