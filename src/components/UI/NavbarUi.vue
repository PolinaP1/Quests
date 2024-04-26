<script>
import { routes } from '../../router/router.js';
export default {
    data() {
        return {
            routes: routes
        }
    },
}
</script>

<template>
    <nav v-for="(router, index) in routes" :key="index" class="navbar">
        <router-link class="nav__items" :to='router.path' v-if="router.private">{{ router.name }}</router-link>
    </nav>
</template>

<style>

</style>