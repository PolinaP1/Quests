<script>
import axios from 'axios';
import SlideReviewCompany from './SlideReviewCompany.vue';
import ArrowSlider from '../UI/ArrowSlider.vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/vue";

const reviewsCompanyUrl = "http://localhost:4000/reviews-company";

export default {
    data() {

        return {
            reviews: [],
        }
    },

    async created() {
        try {
            const res = await axios.get(reviewsCompanyUrl);

            this.reviews = res.data;
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        SlideReviewCompany,
        ArrowSlider
    }

}
</script>

<template>
    <h2 class="reviews__title">Отзывы о нашем Illuminous</h2>
    <h3 class="reviews__poscript">Реакции наших клиентов</h3>
    <!-- указывается метод "navigation", который содержит в себе кнопку перелистывания слайдера вперед - "nextEl" и назад - prevEl -->
    <swiper class="reviews__company" :slides-per-view="2"
        :navigation="{ nextEl: '.review__nextArrow', prevEl: '.review__prevArrow' }">
        <!-- кнопки для перелистывания, которые будут в данном swiper -->
        <div class="reviews__company__arrow">
            <arrow-slider class="review__prevArrow" />
            <arrow-slider class="review__nextArrow" />
        </div>
        <swiper-slide v-for="review in reviews" :key="review.id" :review="review" class="review__company__slide">
            <slide-review-company :review="review" />
        </swiper-slide>
    </swiper>
</template>

<style></style>