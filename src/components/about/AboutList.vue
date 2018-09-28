<!-- <a href="/#/about" class="sidebar-item" v-on:click="toggleSidebar">About</a> -->
<template lang="html">
  <div>
      <p>About List page</p>
  </div>
</template>

<script>
export default {
  name: 'AboutList',
  data() {
    return {
      sidebarItemList: false,
    };
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList
    },
    toggleSidebar() {
      this.sidebarOn = !this.sidebarOn;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
