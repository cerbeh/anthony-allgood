<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title is-centered title is-3">
        {{gallery.title}}
      </p>
    </header>
    <div class="card-image">
      <figure class="image">
        <img :src="`https://i.imgur.com/${gallery.cover}.jpg`" alt="gallery cover image" crossorigin />
      </figure>
    </div>
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
