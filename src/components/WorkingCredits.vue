<template lang="html">
  <div class="sidebar-item">
    <div
      class="sidebar-list-header"
      v-on:click="toggleList"
    >
    <h3>Working Credits</h3>
  </div>
    <ul v-if="sidebarItemList">
      <li
        v-for="medium in mediums"
        v-on:click="$emit('toggle-side-bar')"
      >
        <a :href="`/#/workingcredits/${medium.discipline}`">
          {{medium.discipline}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WorkingCredits',
  data() {
    return {
      mediums: {},
      sidebarItemList: false
    };
  },
  mounted() {
    axios({
      method: 'GET',
      url: '/api/workingcredits'
    })
      .then(res => this.mediums = res.data);
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList;
    }
  }
};
</script>

<style lang="css">
</style>
