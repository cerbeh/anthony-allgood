<template lang="html">
  <div class="sidebar-item">
      <h2 class="title is-3">Gallery</h2>
    <!-- Will work on getting vue carosel to work. -->
    <carousel
      :per-page="1"
    >
      <slide v-for="gallery in galleries">
        <img :src="https://imgur.com/0Gd7Pf8" alt="">
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel';

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
      .then(res => {
        console.log(res.data.data);
        this.galleries = res.data.data
      })
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="css">
</style>
