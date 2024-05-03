<script>
import InfoGuests from '@/components/AboutUs/InfoGuests.vue';
import AboutusBeginning from '@/components/AboutUs/AboutusBeginning.vue';
import OurContacts from '@/components/AboutUs/OurContacts.vue';
import MapComponents from '../components/AboutUs/MapComponents.vue';

export default {
    components:{
        AboutusBeginning,
        InfoGuests,
        OurContacts,
        MapComponents
    }
}
</script>

<template>
    <div class="about__us">
        <aboutus-beginning/>
        <info-guests/>
        <map-components />
        <our-contacts/>
    </div>
</template>

<style>

</style>