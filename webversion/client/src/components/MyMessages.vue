<template>
  <div class="mymessages">
    <section class="hero is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <router-link class="navbar-item button is-white" to="/" tag="button">THANK YOU HEROES </router-link>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <article class="message is-info">
          <div class="message-header">
            <p>My Messages </p>
            <button class="delete" aria-label="delete"></button>
          </div>
          <div class="message-body">
            <table class="table is-responsive">
<tbody>
  <tr>
    <td>Place </td>
    <td>Time </td>
    <td>Message </td>
  </tr>
  <tr>
    <td>2700 E Broadway, Vancouver, BC </td>
    <td>September 16, 2018</td>
    <td>Thank you for being so quick with the ambulance. John.</td>
  </tr>
</tbody>
</table>
          </div>
        </article>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot is-danger has-text-centered">
        <p> &copy; Lumohacks 2018 </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'mymessages',
  data () {
    return {
      counter: 0
    }
  },
  mounted () {
    // this.getPosts()
  },
  methods: {
    // async getPosts () {
    //   const response = await PostsService.fetchPosts()
    //   this.posts = response.data
    //   console.log(this.posts)
    // }
  }
}
</script>

<style media="screen" scoped>
    p {
      width: 80%
    }
    .hero-body .container {
      width: 80%
    }
</style>
