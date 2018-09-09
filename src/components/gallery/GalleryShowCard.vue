<template lang="html">
    <div class="columns is-multiline is-centered">
      <div class="column is-12 has-text-centered">
        <h1 class="title is-1">Gallery</h1>
      </div>
      <div class="column is-2" v-for="image in images" v-on:click="toggleModal" v-on:toggle-modal="toggleModal">
        <GalleryImage :image="image" />
        <Modal :modalOn="modalOn" :data="image"/>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import GalleryImage from './GalleryImageCard';
import Modal from '../common/ModalCard';

export default {
  name: 'GalleryShow',
  data() {
    return {
      images: [],
      modalOn: false
    }
  },
  methods: {
    loadGalleries() {
      axios({
        method: 'GET',
        url: `https://api.imgur.com/3/album/${this.$route.params.id}/images`,
        headers: { Authorization: 'Client-ID 7993a6868066306'}
      }).then(res => {
        this.images = res.data.data
      })
    },
    toggleModal(target) {
      console.log(target);
      this.modalOn = !this.modalOn;
    }
  },
  mounted() {
    this.loadGalleries()
  },
  components: { GalleryImage, Modal },
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
