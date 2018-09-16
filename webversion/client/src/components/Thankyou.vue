<template>
  <div class="thankyou">
    <h1>Thank you</h1>
    <form @submit.prevent="handleSubmit">
      <label for="fname">
        First Name:
        <input id="fname" type="text" v-model="tmsg.fname">
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: 'thankyou',
  data () {
    return {
      tmsg: {
        fname: ''
      }
    }
  },
  mounted () {
    // this.getPosts()
  },
  methods: {
    handleSubmit () {

    }
    // async getPosts () {
    //   const response = await PostsService.fetchPosts()
    //   this.posts = response.data
    //   console.log(this.posts)
    // }
  }
}
</script>
