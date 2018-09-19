<template lang="html">
  <section class="hero section is-fullheight ">
    <div class="container">
      <h1 class="title">Login</h1>
      <form v-on:submit.prevent="login">
        <div class="field">
          <label class="usernameOrEmail">Username or Email</label>
          <input class="input" name="usernameOrEmail" v-model="userLoginDetails.username" />
        </div>
        <div class="field">
          <label class="password">Password</label>
          <input class="input" type="password" name="password"  v-model="userLoginDetails.password" />

        </div>
        <button class="button">Submit</button>
        <hr />
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginCard',
  data() {
    return {
      userLoginDetails: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      // e.preventDefault()
      axios
        .post('/api/login', this.userLoginDetails)
        .then(res => console.log(res.data));
    }
  }
}
</script>

<style lang="css">
.registrationBackground {
  width: 20px;
}
</style>
