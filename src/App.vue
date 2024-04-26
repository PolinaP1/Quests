<script>
import HeaderUi from './components/HeaderUi.vue';
import FooterUi from './components/FooterUi.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components:{
    HeaderUi,
    FooterUi
  }
}
</script>

<template>
  <div class="wrapper">
    <header-ui/>
    <main class="main">
      <router-view>
        
      </router-view>
    </main>
    <footer-ui/>
  </div>
</template>

<style lang="scss">
@import './style/global.scss';
</style>
