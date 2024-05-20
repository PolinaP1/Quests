<script>
import axios from 'axios';
import SlideReviewCompany from './SlideReviewCompany.vue';
import ArrowSlider from '../UI/ArrowSlider.vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/vue";

const reviewsCompanyUrl = "http://localhost:3000/todos";

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
    <swiper class="reviews_company" :slides-per-view="2" :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }">
        <div class="reviews_company">
            <arrow-slider class="prevArrow"/>
            <arrow-slider class="nextArrow"/>
        </div>
        <swiper-slide v-for="review in reviews" :key="review.id" :review="review" class="review_company__slide">
            <slide-review-company :review="review" />
        </swiper-slide>
    </swiper>
</template>

<style></style>