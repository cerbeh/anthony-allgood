<template lang="html">
  <div class="columns is-multiline is-centered">
    <div v-for="image in images" class="column is-3">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="image" alt="">
          </figure>
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
  mounted() {
    console.log(this);
    axios({
      method: 'GET',
      url: `https://api.imgur.com/3/album/${this.$route.params.id}/images`,
      headers: { Authorization: 'Client-ID 7993a6868066306'}
    }).then(res => {
      this.images = res.data.data.map(e => e.link)
    })
  }
}
</script>

<style lang="css">
</style>
