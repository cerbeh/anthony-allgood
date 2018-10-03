<template lang="html">
  <div class="search-bar">
    <h2>Filter</h2>
    <input class="input" type="text" name="search" id="search" placeholder="Search" v-on:change="$emit('update:search')">

  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['search', 'category']
}
</script>

<style lang="css">
</style>
