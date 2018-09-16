<template>
  <div class="welcome">
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
            <!-- <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-primary is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div> -->
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <!-- <h1 class="title">
            Thank you Heroes
          </h1> -->
          <div class="">

          <h2 class="subtitle">
            No matter if it is a firefighter who helped during a fire, a police who stopped crime, a paramedic who helped to save life, or a veteran who fought for our country, everyone will be happy receiving a thank you or a praise from the people whose lives are impacted positively by their actions
          </h2>
          <p> Please leave your thank you note and help us grow our poppies! </p>
          <router-link to="/thank-you" tag="button" class="button is-white">Thank you </router-link>
        </div>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot is-danger has-text-centered">
        <!-- <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav> -->
        <p> &copy; Lumohacks 2018 </p>
      </div>
    </section>

    <!-- <section class="hero is-medium is-primary is-bold">
      <div class="hero-head">
        <div class="container">
          <h1 class="title">
            Thank you Heroes
          </h1>
        </div>
      </div>
      <div class="content hero-body">
        <p> No matter if it is a firefighter who helped during a fire, a police who stopped crime, a paramedic who helped to save life, or a veteran who fought for our country, everyone will be happy receiving a thank you or a praise from the people whose lives are impacted positively by their actions.  Please leave your thank you note and help us grow our poppies! </p>
      </div>
      <div class="hero-footer">
        <p> &copy; Lumohacks 2018 </p>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'welcome',
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
</style>
