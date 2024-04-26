<script>
import SotialnetworkUi from './SotialnetworkUi.vue';

export default {
    components:{
        SotialnetworkUi
    }
}
</script>

<template>
    <div class="support">
        <h1 class="support__heading">Поддержка</h1>
        <h2 class="support__description">Мы всегда готовы вам помочь. Наши операторы онлайн 24/7</h2>
        <sotialnetwork-ui/>
    </div>
</template>

<style>
    .support__heading{
        color: white;
        font-size: 18px;
        padding-bottom: 10px;
    }
    .support__description{
        color: white;
        font-size: 16px;
        width: 255px;
        padding-bottom: 10px;
        font-weight: normal;
        line-height: 25px;
    }
</style>