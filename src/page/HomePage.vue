<script>
// import axios from 'axios';
import FilteringquestsUi from '@/components/UI/Filter/FilteringquestsUi.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';
import ProposalAbout from '@/components/ProposalAbout.vue';
import QuestList from '../components/UI/Quests/QuestsList.vue';

// const baseUrl = "http://localhost:3000/todos";

export default {
    data() {

        return {
            todos: [],
            quantity: [1, 2, 3, 4],
            randomNumbers: [],
            matchingElements: []
        }
    },

    // async created() {
    //     try {
    //         const res = await axios.get(baseUrl);
    //         this.todos = res.data;
    //     }
    //     catch (e) {
    //         console.error(e);
    //     }
    // },

    // mounted() {
    //     this.generateRandomNumbers()
    //     console.log('gghh')
    //     this.getFiltering()
    //     console.log(this.todos)
    // },

    // methods: {
    //     generateRandomNumbers() {
    //         for (let i = 0; i < 2; i++) {
    //             this.randomNumbers.push(this.getRandomInt(20));
    //         }
    //     },
    //     getRandomInt(max) {
    //         return Math.floor(Math.random() * max) + 1;
    //     },

    //     getFiltering() {
    //         this.todos.forEach(item => { 
    //             if (this.randomNumbers.includes(item.id)) { 
    //                 this.matchingElements.push(item); 
    //             }
    //         });
    //         console.log(this.randomNumbers)
    //     }

    // },

    components: {
        RecomendationsList,
        FilteringquestsUi,
        ProposalAbout,
        QuestList
    }
}
</script>

<template>
    <div class="home">
        <recomendations-list />
        <filteringquests-ui />
        <quest-list />
        <!-- <quest-list v-for="todoss in matchingElements" :key="todoss.id" :todoss="todoss" /> -->
        <proposal-about />
    </div>
</template>

<style>
.home {
    background: black;
}
</style>