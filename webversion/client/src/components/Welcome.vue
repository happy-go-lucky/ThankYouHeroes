<template>
  <div class="welcome">
    <h1>Thank you Heroes</h1>
    <p> No matter if it is a firefighter who helped during a fire, a police who stopped crime, a paramedic who helped to save life, or a veteran who fought for our country, everyone will be happy receiving a thank you or a praise from the people whose lives are impacted positively by their actions.  Please leave your thank you note and help us grow our poppies! </p>
    <router-link to="/thank-you" tag="button">Thank you </router-link>
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
