<template lang="html">
  <section class="section">
    <div class="container">
      <header class="header">
        <h1 class="title is-1">Working Credits</h1>
        <p class="subtitle is-3">click to toggle</p>
      </header>
      <hr/>
      <div
      id="medium-wrapper"
      v-for="medium in mediums"
      >
        <TableCard :medium="medium" :toggleTable="toggleTable"/>
      </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
import TableCard from './WorkingCreditsTableCard'

export default {
  name: 'WorkingCredits',
  data() {
    return {
      mediums: [],
      sidebarItemList: false
    };
  },
  mounted() {
    axios({
      method: 'GET',
      url: '/api/workingcredits'
    })
      .then(res => {
        console.log(res.data);
        this.mediums = res.data;
      })
  },
  methods: {
    toggleList() {
      this.sidebarItemList = !this.sidebarItemList;
    },
    toggleTable(targetTable) {
      targetTable.showData = !targetTable.showData;
    }
  },
  components: {
    TableCard
  }
};
</script>

<style lang="css">
</style>
