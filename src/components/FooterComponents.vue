<script>
import NavbarUi from './UI/NavbarUi.vue';
import SupportUi from './UI/FooterElementsOnly/SupportUi.vue';
import AssistanceUi from './UI/FooterElementsOnly/AssistanceUi.vue';

export default {
    components: {
        NavbarUi,
        SupportUi,
        AssistanceUi
    }
}
</script>

<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__link">
                <h2 class="footer__link__title">Illuminous</h2>
                <navbar-ui />
            </div>
            <support-ui />
            <assistance-ui />
        </div>
    </footer>
</template>

<style></style>