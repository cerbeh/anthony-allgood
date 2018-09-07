<template>
  <div class="sidebar-style">
    <ul class="navbar-style" v-if="sidebarOn">
      <li>
        <a href="/#/about" class="sidebar-item">About</a>
      </li>
      <li>
        <a href="/#/gallery" class="sidebar-item">Gallery</a>
      </li>
      <li>
        <a href="/#/contact" class="sidebar-item">Contact</a>
      </li>
    </ul>
    <i class="fas fa-chevron-right fa-3x sidebar-item" v-on:click="toggleSidebar" v-if="!sidebarOn"></i>
    <i class="fas fa-chevron-left fa-3x sidebar-item" v-on:click="toggleSidebar" v-if="sidebarOn"></i>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      sidebarOn: false
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarOn = !this.sidebarOn;
    }
  }
}
</script>

<style lang="css">
.sidebar-style {
  height: 100vh;
  display: flex;
  /* position: absolute; */
}
.navbar-style {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  justify-content: center;
  left: -400px;
  /* margin: 20 0 30 0; */
  /* margin-left: 20%; */
}
.sidebar-item {
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
}
</style>
