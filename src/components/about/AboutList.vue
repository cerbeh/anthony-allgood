<!-- <a href="/#/about" class="sidebar-item" v-on:click="toggleSidebar">About</a> -->
<template lang="html">
  <div class="sidebar-item">
    <div class="sidebar-list-header" v-on:click="toggleList">
      <p>About</p>
    </div>
    <ul v-if="sidebarItemList">
      <li v-on:click="$emit('toggle-side-bar')">Anthony Allgood</li>
      <li v-on:click="$emit('toggle-side-bar')">Working Credits</li>
      <li v-on:click="$emit('toggle-side-bar')">TIE</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AboutList',
  data() {
    return {
      sidebarItemList: false,
      //Line here with the prop from sidebar.vue to toggle the sidebar on and off with the button?
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
