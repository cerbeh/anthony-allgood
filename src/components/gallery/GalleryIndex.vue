<template lang="html">
  <div class="sidebar-item">
    <div class="sidebar-list-header" v-on:click="toggleList">
      <p>Gallery</p>
    </div>
    <ul v-if="sidebarItemList">
      <li
        v-for="gallery in galleries"
        v-on:click="$emit('toggle-side-bar')"
      >
        <a :href="`/#/gallery/${gallery.id}`">{{gallery.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GalleryList',
  data() {
    return {
      sidebarItemList: false,
      galleries: []
    };
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList
    }
  },
  mounted() {
    axios({
      method: 'GET',
      url: 'https://api.imgur.com/3/account/cerbeh/albums',
      headers: { Authorization: 'Client-ID 7993a6868066306'}
    })
      .then(res => this.galleries = res.data.data)
  }
}
</script>

<style lang="css">
</style>
