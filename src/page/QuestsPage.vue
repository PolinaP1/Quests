<script>
import QuestList from '../components/UI/Quests/QuestsList.vue';
import FilteringquestsUi from '@/components/UI/Filter/FilteringquestsUi.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';

export default {
    components: {
        RecomendationsList,
        FilteringquestsUi,
        QuestList
    }
}
</script>

<template>
    <div class="quests">
        <recomendations-list />
        <filteringquests-ui />
        <quest-list />
    </div>
</template>

<style></style>