<template lang="html">
  <div class="sidebar-item">
      <h2 class="title is-3">Gallery</h2>
    <!-- Will work on getting vue carosel to work. -->
    <carousel
      :per-page="1"
    >
      <slide v-for="gallery in galleries">
        <p>{{gallery.title}}</p>
        <img src="" alt="">
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
  mounted() {
    axios({
      method: 'GET',
      url: '/api/gallerylist'
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
