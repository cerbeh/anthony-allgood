<template lang="html">
  <div class="modal is-active" id="wrapper" v-if="modalOn">
    <div class="modal-background" v-on:click="$emit('toggle-modal')"></div>
    <div class="modal-content">
      <img :src="data.link" alt="">
      <!-- Any other Bulma elements you want --> {{ data }}
    </div>
    <button class="modal-close is-large" aria-label="close"
    v-on:click="$emit('toggle-modal')"></button>
  </div>

</template>

<script>
export default {
  name: 'Modal',
  props: ['modalOn','data']
}
</script>

<style lang="css">
</style>
