<template lang="html">
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
</template>

<script>
export default {
  name: 'GalleryImage',
  props: ['image']
}
</script>

<style lang="css">
</style>
