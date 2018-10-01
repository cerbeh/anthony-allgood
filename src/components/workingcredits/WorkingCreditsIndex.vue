<template lang="html">
  <section class="section">
    <div class="container">
      <header class="header">
        <h1 class="title is-1">Working Credits</h1>
        <p class="subtitle is-3">click to toggle</p>
          <input class="input" type="text" name="search" id="search" placeholder="Search" v-model="search">
          {{this.search}}
      </header>
      <hr/>
      <div
      id="medium-wrapper"
      v-for="post in filteredList"
      >
        <TableCard :medium="post" :toggleTable="toggleTable"/>
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
      sidebarItemList: false,
      search: ''
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
      });
  },
  computed: {
    //Search feature will go here and then the for loop in the html will be adjusted
    filteredList() {
      return this.mediums.filter(medium => {
        return medium.discipline.toLowerCase().includes(this.search.toLowerCase())
      });
    }
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
