<script>
import axios from 'axios';
import SlideReviewQuest from './SlideReviewQuest.vue';
import ArrowSlider from '../../UI/ArrowSlider.vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from "swiper/vue";

const reviewsQuestUrl = "http://localhost:5000/reviews";

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },

    data() {

        return {
            reviews: [],
        }
    },

    async created() {
        try {
            const res = await axios.get(reviewsQuestUrl);

            this.reviews = res.data;
        }
        catch (e) {
            console.error(e);
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        SlideReviewQuest,
        ArrowSlider
    },

    computed: {
    filteredReviews() {
      return this.reviews.filter(review => review.id_quest === this.todo.id);
    }
  }

}
</script>

<template>
    <h2 class="reviews__title">Отзывы о квесте - <span class="reviews__title__span">"{{ todo.name }}"</span></h2>
    <swiper class="reviews__company" :slides-per-view="2"
        :navigation="{ nextEl: '.review__nextArrow', prevEl: '.review__prevArrow' }">
        <div class="reviews__company__arrow">
            <arrow-slider class="review__prevArrow" />
            <arrow-slider class="review__nextArrow" />
        </div>
        <swiper-slide v-for="review in filteredReviews" :key="review.id" :review="review" class="review__company__slide">
            <slide-review-quest :review="review" :todo="todo"/>
        </swiper-slide>
    </swiper>
</template>

<style></style>