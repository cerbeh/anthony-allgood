<template lang="html">
  <ul>
    <li>
      <a href="/#/about" class="sidebar-item" v-on:click="toggleSidebar">About</a>
    </li>
    <li>
      <h1>Hello About List</h1>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AboutList'
}
</script>

<style lang="css">
.sidebar-item {
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
}
</style>
