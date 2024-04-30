<script>
import UniqueGuests from '@/components/AboutUs/UniqueGuests.vue';
import AboutusBeginning from '@/components/AboutUs/AboutusBeginning.vue';
import SafetyAbout from '@/components/AboutUs/SafetyAbout.vue';
import FriendlyTeam from '@/components/AboutUs/FriendlyTeam.vue';
import OurContacts from '@/components/AboutUs/OurContacts.vue';
export default {
    components:{
        AboutusBeginning,
        UniqueGuests,
        SafetyAbout,
        FriendlyTeam,
        OurContacts
    }
}
</script>

<template>
    <div class="about__us">
        <aboutus-beginning/>
        <unique-guests/>
        <safety-about/>
        <friendly-team/>
        <our-contacts/>
    </div>
</template>

<style>
    .about__us{
        background: black;
    }
</style>