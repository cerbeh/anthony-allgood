<template lang="html">
  <div class="columns is-multiline is-centered">
    <div class="column is-12 has-text-centered">
      <h1 class="title is-1">Gallery</h1>
    </div>
    <div v-for="image in images" class="column is-2 gallery-item">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="image.link" alt="">
          </figure>
        </div>
        <div class="card-header">
          <div class="card-header-title is-centered">
            <h3 class="title is-5">
              {{ image.description }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GalleryShow',
  data() {
    return {
      images: []
    }
  },
  methods: {
    loadGalleries() {
      axios({
        method: 'GET',
        url: `https://api.imgur.com/3/album/${this.$route.params.id}/images`,
        headers: { Authorization: 'Client-ID 7993a6868066306'}
      }).then(res => {
        console.log(res.data.data);
        this.images = res.data.data
      })
    }
  },
  mounted() {
    this.loadGalleries()
  },
  watch: {
    '$route.params.id': function() {
      this.loadGalleries()
    }
  }
}
</script>

<style lang="css">
.gallery-style {
  height: 5%;
}
.gallery-item {
  display: flex;
  align-items: center;

}
</style>
