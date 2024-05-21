<script>
import axios from 'axios';
import ArrowSlider from '../ArrowSlider.vue';
import RecomendationsItem from './RecomendationsItem.vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/vue";



const baseUrl = "http://localhost:3000/todos";

export default {
    data() {

        return {
            todos: [],
        }
    },

    async created() {
        try {
            const res = await axios.get(baseUrl);

            this.todos = res.data;
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        RecomendationsItem,
        ArrowSlider
    }

}
</script>

<template>
    <swiper class="recomendations" :slides-per-view="1" :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }">
        <div class="recomendations__controls">
            <arrow-slider class="prevArrow"/>
            <arrow-slider class="nextArrow"/>
        </div>
        <swiper-slide v-for="todo in todos.slice(0,10)" :key="todo.id" :todo="todo" class="recomendations__slide">
            <recomendations-item :todo="todo"/>
        </swiper-slide>
    </swiper>
</template>

<style></style>