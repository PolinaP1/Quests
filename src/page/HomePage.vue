<script>
import FilteringquestsUi from '@/components/UI/FilteringquestsUi.vue';
import RecomendationsUi from '@/components/UI/RecomendationsUi.vue';

export default {
    components:{
        RecomendationsUi,
        FilteringquestsUi
    }
}
</script>

<template>
    <div class="home">
        <recomendations-ui/>
        <filteringquests-ui/>
    </div>
</template>

<style>
    .home{
        background: black;
    }
</style>