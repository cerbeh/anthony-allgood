<template lang="html">
  <section class="section">
    <div class="container">
      <header class="header">
        <h1 class="title is-1">Working Credits</h1>
        <div class="search-bar tile is-ancester">
          <input class="input" type="text" name="search" id="search" placeholder="Search" v-model="search">
          <div class="select">
            <select v-model="searchDiscipline">
              <option value="medium" selected>Medium</option>
              <option value="director">Director</option>
              <option value="company">Company</option>
            </select>
            {{ searchDiscipline }}
          </div>
        </div>
      </header>
      <hr/>

      <div
      id="medium-wrapper"
      v-for="medium in filteredList"
      >
      <TableCard
      :medium="medium"
      :toggleTable="toggleTable"
      />
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
      search: '',
      searchDiscipline: 'medium'
    };
  },

  mounted() {
    axios({
      method: 'GET',
      url: '/api/workingcredits'
    })
    .then(res => {
      this.mediums = res.data;
    });
  },

  computed: {
    //Search feature will go here and then the for loop in the html will be adjusted

    // Search through Discipline
    filteredList() {
      switch (this.searchDiscipline) {

        case 'medium':
        return this.mediums.filter(medium => {
          return medium.discipline.toLowerCase().includes(this.search.toLowerCase())
        });
        break;

        case 'director':
        console.log('Would search by director');
        return this.mediums.filter(medium => {
          return medium.discipline.toLowerCase().includes(this.search.toLowerCase())
        });
        break;

        case 'company':
        console.log(this.mediums, 'mediums');

        const filteredCategory = this.mediums.map(discipline => {
          return {
            discipline: discipline.discipline,
            credits: discipline.credits.filter(credit => {
              return credit.company.toLowerCase().includes(this.search.toLowerCase())
            }),
            showData: false
          }
        })

        // .filter(discipline => {
        //   console.log(discipline[0]);
        //   return discipline.credits.length > 1;
        // })

        console.log(filteredCategory, 'filteredCategory');
        return filteredCategory;
        // return this.mediums.filter(medium => {
        //
        //   return medium.discipline.toLowerCase().includes(this.search.toLowerCase())
        // });
        break;
      }
    },
    // console.log(this.searchDiscipline);
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
