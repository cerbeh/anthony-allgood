<!-- <a href="/#/about" class="sidebar-item" v-on:click="toggleSidebar">About</a> -->
<template lang="html">
  <div>
      <p>About List Page</p>
      <img src="https://i.imgur.com/0Gd7Pf8.jpg" alt="">
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
    },
    toggleSidebar() {
      this.sidebarOn = !this.sidebarOn;
    }
  }
};
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
