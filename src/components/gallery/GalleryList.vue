<template lang="html">
  <div class="sidebar-item">
    <div class="sidebar-list-header" v-on:click="toggleList">
      <p>Gallery</p>
    </div>
    <ul v-if="sidebarItemList">
      <li v-on:click="$emit('toggle-side-bar')">Headshots</li>
      <li v-on:click="$emit('toggle-side-bar')">Production Shots</li>
      <li v-on:click="$emit('toggle-side-bar')">Personal</li>
      <li v-on:click="$emit('toggle-side-bar')">Showreel</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GalleryList',
  data() {
    return {
      sidebarItemList: false
    };
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList
    }
  }
}
</script>

<style lang="css">
</style>
