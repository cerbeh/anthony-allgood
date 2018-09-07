<template>
  <div class="sidebar-style">
    <ul class="navbar-style">
      <li>
        <a href="/#/about">About</a>
      </li>
      <li>
        <a href="/#/gallery">Gallery</a>
      </li>
      <li>
        <a href="/#/contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
}
</script>

<style lang="css">
.sidebar-style {
  height: 100vh;
}
.navbar-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  justify-content: space-around;
}
</style>
