<script>
import HeaderComponents from './components/HeaderComponents.vue';
import FooterComponents from './components/FooterComponents.vue';
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);

export default {
  name: 'App',

  components: {
    HeaderComponents,
    FooterComponents
  }
}
</script>

<template>
  <div class="wrapper">
    <header-components />
    <main class="main">
      <router-view>

      </router-view>
    </main>
    <footer-components />
  </div>
</template>

<style lang="scss">
@import './style/global.scss';
</style>