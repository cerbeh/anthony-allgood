<template lang="html">
  <h1 class="title is-2">Working Credits: {{credits.discipline}}</h1>
</template>

<script>
import axios from 'axios'
// import GalleryImage from './GalleryImageCard';
// import Modal from '../common/ModalCard';

export default {
  name: 'GalleryShow',
  data() {
    return {
      credits: [],
      // modalOn: false,
      // modalData: {}
    }
  },
  methods: {

    loadCredits() {
      axios({
        method: 'GET',
        url: `/api/workingcredits/${this.$route.params.id}`,
      }).then(res => {
        console.log(res.data)
        this.credits = res.data
      })
    },

    toggleModal(data) {
      this.modalOn = !this.modalOn;
      this.modalData = data;
    }

  },
  mounted() {
    console.log(this.$route.params);
    this.loadCredits()
  },
  // components: { GalleryImage, Modal },
  watch: {
    '$route.params.id': function() {
      this.loadCredits()
    }
  }
}
</script>

<style lang="css">
</style>
