<template>
  <div id="app">
    <div class="media">
      <div class="media-left">
        <Sidebar />
      </div>
      <div class="media-content">
        <section class="hero is-fullheight">
          <div class="hero-body">
            <router-view></router-view>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/common/Sidebar';

export default {
  name: 'app',
  components: { Sidebar }
};
</script>

<style lang="css">
  @import '../node_modules/bulma/css/bulma.css';
</style>
