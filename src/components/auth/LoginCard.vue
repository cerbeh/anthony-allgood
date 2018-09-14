<template lang="html">
  <section className="hero section registrationBackground is-fullheight ">
    <div className="container">
      <h1 className="title">Login</h1>
      <form onSubmit=handleSubmit>
        <div className="field">
          <label className="usernameOrEmail">Username or Email</label>
          <input className="input" name="usernameOrEmail" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password"  onChange={this.handleChange} />

        </div>
        <button className="button">Submit</button>
        <hr />
      </form>
      <Link className="" to="/register">Not a member? Sign up now</Link>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
