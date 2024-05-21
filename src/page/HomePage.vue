<script>
import axios from 'axios';
import FilteringList from '@/components/UI/Filter/FilteringList.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';
import ProposalAbout from '@/components/ProposalAbout.vue';
import QuestList from '../components/UI/Quests/QuestsList.vue';
import SwiperReviewsCompany from '../components/ReviewsCompany/SwiperReviewsCompany.vue';

const baseUrl = "http://localhost:3000/todos";

export default {
    data() {

        return {
            todos: [],
            quantity: [1, 2, 3, 4],
            randomNumbers: [],
            matchingElements: []
        }
    },

    watch: {
        todos() {
            this.generateRandomNumbers();
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


    methods: {
        getFiltering() {
            this.todos.forEach(item => {
                if (this.randomNumbers.includes(Number(item.id))) {
                    this.matchingElements.push(item);
                }
            });
        },

        generateRandomNumbers() {
            for (let i = 0; i < 4; i++) {
                this.randomNumbers.push(this.getRandomInt(20));
            }
            this.getFiltering();
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max) + 1;
        }

    },

    components: {
        RecomendationsList,
        FilteringList,
        ProposalAbout,
        QuestList,
        SwiperReviewsCompany
    }
}
</script>

<template>
    <div class="home">
        <recomendations-list />
        <filtering-list />
        <quest-list :todoss="matchingElements"/>
        <proposal-about />
        <swiper-reviews-company />
    </div>
</template>

<style></style>