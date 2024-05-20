<script>
import QuestList from '../components/UI/Quests/QuestsList.vue';
import FilteringList from '@/components/UI/Filter/FilteringList.vue';
import RecomendationsList from '@/components/UI/SliderRecomendation/RecomendationsList.vue';

export default {
    components: {
        RecomendationsList,
        FilteringList,
        QuestList
    }
}
</script>

<template>
    <div class="quests">
        <recomendations-list />
        <filtering-list />
        <quest-list />
    </div>
</template>

<style></style>