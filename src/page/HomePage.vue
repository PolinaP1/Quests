<script>
import FilteringquestsUi from '@/components/UI/Filter/FilteringquestsUi.vue';
import RecomendationsUi from '@/components/UI/RecomendationsUi.vue';
import ProposalAbout from '@/components/ProposalAbout.vue';

export default {
    components: {
        RecomendationsUi,
        FilteringquestsUi,
        ProposalAbout
    }
}
</script>

<template>
    <div class="home">
        <recomendations-ui />
        <filteringquests-ui />
        <proposal-about />
    </div>
</template>

<style>
.home {
    background: black;
}
</style>