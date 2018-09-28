<template lang="html">
  <table class="table is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th
          colspan="4"
          v-on:click="toggleTable(medium)"
        >
          <h2 class="subtitle is-3">{{medium.discipline}}</h2>
        </th>
      </tr>
      <tr v-show="medium.showData">
        <th>Title</th>
        <th>Character</th>
        <th>Director</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody v-show="medium.showData">
      <tr v-for="credit in medium.credits">
        <td>{{credit.title}}</td>
        <td>{{credit.character}}</td>
        <td>{{credit.director}}</td>
        <td>{{credit.company}}</td>
      </tr>
    </tbody>
    <hr v-show="medium.showData" colspan="4" />
  </table>
</template>

<script>
export default {
  name: 'TableCard',
  props: ['medium', 'toggleTable']
}
</script>

<style lang="css">
</style>
