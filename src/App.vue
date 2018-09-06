<template>
  <div id="app">
    <div class="media">
      <div class="media-left">
        <Sidebar />
      </div>
      <div class="media-content">
        <router-view></router-view>
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
