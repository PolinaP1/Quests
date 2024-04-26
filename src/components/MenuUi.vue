<script>
import LogotipUi from './UI/LogotipUi.vue';
import NavbarUi from './UI/NavbarUi.vue';
export default {
    components: {
        LogotipUi,
        NavbarUi
    }
}
</script>

<template>
    <div class="menu">
        <logotip-ui />
        <navbar-ui />
        <router-link class="number" to='/'>+7 (499) 460-54-20</router-link>
    </div>
</template>

<style>
.menu {
    display: flex;
    gap:15px;
    align-items: center;
    justify-content: space-between;
}
.number{
    text-decoration: none;
    cursor: pointer;
    color: #EF4234;
    padding-left: 350px;
    padding-right: 50px;
    font-weight: bold;
}
</style>