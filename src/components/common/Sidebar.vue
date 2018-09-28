<template>
  <div class="sidebar-style">
    <ul class="navbar-style" v-if="sidebarOn">
      <li>
        <a href="/#/aboutme" class="sidebar-item" v-on:click="toggleSidebar">About Me</a>
      </li>
      <li>
        <a href="/#/workingcredits" class="sidebar-item" v-on:click="toggleSidebar">Acting Credits</a>
      </li>
      <li>
        <!-- <GalleryList v-on:toggle-side-bar="toggleSidebar" /> -->
        <a href="/#/gallery" class="sidebar-item" v-on:click="toggleSidebar">Gallery</a>
      </li>
      <li>
        <a href="/#/contact" class="sidebar-item" v-on:click="toggleSidebar">Contact</a>
      </li>
    </ul>
    <i class="fas fa-chevron-right fa-3x sidebar-item" v-on:click="toggleSidebar" v-if="!sidebarOn"></i>
    <i class="fas fa-chevron-left fa-3x sidebar-item" v-on:click="toggleSidebar" v-if="sidebarOn"></i>
  </div>
</template>

<script>
import GalleryList from '../gallery/GalleryIndex';

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
    },
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList;
    }
  },
  components: {
    GalleryList
  }
};
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
  animation: toggleSidebarOn .05s 1;
}

@keyframes toggleSidebarOn {
  0% {
    transform:translateX(-150px);
  }
  100% {
    transform:translateX(0);
  }
}
</style>
