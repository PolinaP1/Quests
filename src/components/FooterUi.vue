<script>
import NavbarUi from './UI/NavbarUi.vue';
import SupportUi from './UI/SupportUi.vue';
import AssistanceUi from './UI/AssistanceUi.vue';

export default {
    components:{
        NavbarUi,
        SupportUi,
        AssistanceUi
    }
}
</script>

<template>
    <footer class="footer">
        <div class="footer__link">
            <navbar-ui/>
        </div>
        <support-ui/>
        <assistance-ui/>
    </footer>
</template>

<style>
    .footer{
        background: #1A1A1A;
        height: 287px;
        display: flex;
        gap: 100px;
        padding-top: 50px;
        justify-content: space-between;
        
    }
    .footer .nav__items{
        color:white;
    }
    .footer__link{
        width: 50px;
    }
</style>