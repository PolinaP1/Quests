<script>
import axios from 'axios';
import ArrowSlider from '../../UI/ArrowSlider.vue';
import RecomendationsItem from './RecomendationsItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            todos: [],
            todoName: '',
            modules: [Navigation],
            onSwiper,
            onSlideChange
        }
    },

    async created() {
        try {
            const res = await axios.get(baseUrl);

            this.todos = res.data;
            console.log(this.todos[0].name);
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
    },

}
</script>

<template>
    <swiper class="recomendations" :navigation="true" :modules="modules" @swiper="onSwiper"
        @slideChange="onSlideChange">
        <swiper-slide>
            <div class="recomendations__carousel">
                <section class="carousel__slide">
                    <recomendations-item v-for="todo in todos" :key="todo.id" :todo="todo" />
                </section>
            </div>
            <div class="recomendations__controls">
                <!-- <button @click="prevSlide" class="prev"><img src="@/img/Arrow.svg"/></button> -->
                <arrow-slider @click="nextSlide" class="next"></arrow-slider>
            </div>
        </swiper-slide>
    </swiper>
</template>

<style></style>