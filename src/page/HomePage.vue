<script>
import FilteringquestsUi from '@/components/UI/Filter/FilteringquestsUi.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';
import ProposalAbout from '@/components/ProposalAbout.vue';
import QuestList from '../components/UI/Quests/QuestsList.vue';

export default {
    data() {
        return {
            quantity: [1,2,3,4]
        }
    },
    
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
        <quest-list/>
        <proposal-about />
    </div>
</template>

<style>
.home {
    background: black;
}
</style>