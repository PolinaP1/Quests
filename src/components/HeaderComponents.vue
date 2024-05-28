<script>
import LogotipUi from './UI/LogotipUi.vue';
import NavbarUi from './UI/NavbarUi.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        LogotipUi,
        NavbarUi
    }
}
</script>

<template>
    <div class="header-ui">
        <header class="header">
            <logotip-ui />
            <div class="navbar">
                <navbar-ui />
            </div>
            <div class="number">
                <a class="number__link" href="tel:+74994605420">+7 (499) 460-54-20</a>
            </div>
        </header>
    </div>
</template>

<style></style>