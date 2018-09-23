<!-- <template lang="html">
  <section class="section">
    <div class="container">
      <h1 class="title is-2">Working Credits: {{credits.discipline}}</h1>
      <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Title</th>
            <th>Character</th>
            <th>Director</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="credit in credits.credits">
            <td>{{credit.title}}</td>
            <td>{{credit.character}}</td>
            <td>{{credit.director}}</td>
            <td>{{credit.company}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GalleryShow',
  data() {
    return {
      credits: [],
    }
  },
  methods: {

    loadCredits() {
      axios({
        method: 'GET',
        url: `/api/workingcredits/${this.$route.params.id}`,
      }).then(res => {
        this.credits = res.data
      })
    },

    toggleModal(data) {
      this.modalOn = !this.modalOn;
      this.modalData = data;
    }

  },
  mounted() {
    console.log(this.$route.params);
    this.loadCredits()
  },
  watch: {
    '$route.params.id': function() {
      this.loadCredits()
    }
  }
}
</script>

<style lang="css">
</style> -->
