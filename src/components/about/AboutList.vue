<!-- <a href="/#/about" class="sidebar-item" v-on:click="toggleSidebar">About</a> -->
<template lang="html">
  <div class="sidebar-item">
    <div class="sidebar-list-header" v-on:click="toggleList">
      <p>About</p>
    </div>
    <ul v-if="sidebarItemList">
      <li>Anthony Allgood</li>
      <li>Working Credits</li>
      <li>TIE</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutList',
  data() {
    return {
      sidebarItemList: false
    };
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList;
    }
  }
}
</script>

<style lang="css">
.sidebar-list-header {

}

.sidebar-item {
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
}
</style>
