<template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Working Credits</h1>
      <hr/>
      <div
      id="medium-wrapper"
      v-for="medium in mediums"
      >
        <table class="table is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th colspan="4">
                <h2 class="subtitle is-3">{{medium.discipline}}</h2>
              </th>
            </tr>
            <tr>
              <th>Title</th>
              <th>Character</th>
              <th>Director</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="credit in medium.credits">
              <td>{{credit.title}}</td>
              <td>{{credit.character}}</td>
              <td>{{credit.director}}</td>
              <td>{{credit.company}}</td>
            </tr>
          </tbody>
        </table>
        <hr/>
      </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';

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
