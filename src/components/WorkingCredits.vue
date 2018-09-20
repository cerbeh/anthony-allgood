<template lang="html">
  <ul>
    <!-- <li v-for="gallery in galleries"></li> -->
  </ul>

</template>

<script>
import axios from 'axios';

export default {
  name: 'WorkingCredits',
  data() {
    return {

    }
  },
  mounted() {
    axios({
      method: 'GET',
      url: '/api/workingcredits'
      // headers: { Authorization: 'Client-ID 7993a6868066306'}
    })
      .then(res => console.log(res.data));
  }
}
</script>

<style lang="css">
</style>
