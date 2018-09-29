<template lang="html">
  <div class="">
    <img :src="`https://i.imgur.com/${gallery.cover}.jpg`" alt="gallery cover image" crossorigin />
  </div>
</template>

<script>
export default {
  name: 'GalleryImage',
  props: ['gallery']
}
</script>

<style lang="css">
</style>
