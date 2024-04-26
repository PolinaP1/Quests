<script>
import MenuUi from './MenuUi.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        MenuUi,
    }
}
</script>

<template>
    <header class="header">
        <menu-ui/>
    </header>
</template>

<style>
.header{
    margin-top: 35px;
    display: flex;
    align-items: center;
    height: 45px;
    width: 100%;
    background: rgba(45, 45, 45, 0.196);
}
</style>