<template lang="html">
  <section class="hero section is-fullheight ">
    <div class="container">
      <h1 class="title">Login</h1>
      <form onSubmit=handleSubmit>
        <div class="field">
          <label class="usernameOrEmail">Username or Email</label>
          <input class="input" name="usernameOrEmail" onChange={this.handleChange} />
        </div>
        <div class="field">
          <label class="password">Password</label>
          <input class="input" type="password" name="password"  onChange={this.handleChange} />

        </div>
        <button class="button">Submit</button>
        <hr />
      </form>
      <Link class="" to="/register">Not a member? Sign up now</Link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="css">
.registrationBackground {
  width: 20px;
}
</style>
