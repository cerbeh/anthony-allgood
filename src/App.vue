<template>
  <div id="app">
    <div class="media">
      <div class="media-left">
        <h1>on the left</h1>
      </div>
      <div class="media-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="css">
  @import '../node_modules/bulma/css/bulma.css';
</style>
