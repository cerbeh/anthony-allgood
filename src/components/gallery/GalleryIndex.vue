<template lang="html">
  <div class="sidebar-item">
      <h2 class="title is-3">Gallery</h2>
    <carousel
      :per-page="1"
      v-if="showSlider"
    >
      <slide v-for="gallery in galleries">
        <GalleryCoverImage :gallery="gallery" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel';
import GalleryCoverImage from './GalleryCoverImage'

export default {
  name: 'GalleryList',
  data() {
    return {
      sidebarItemList: false,
      showSlider: false,
      galleries: []
    };
  },
  mounted() {
    axios({
      method: 'GET',
      url: '/api/gallerylist'
    })
      .then(res => {
        this.galleries = res.data.data;
        console.log(this.galleries);
        this.showSlider = true;
      })
  },
  components: {
    Carousel,
    Slide,
    GalleryCoverImage
  }
}
</script>

<style lang="css">
</style>
