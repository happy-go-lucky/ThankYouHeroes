employeeUserid: string (unique)
location: Object
eventDate:Date
comments:String
serviceIconCode:integer
emoticonCode:integer
<template>
  <div class="thankyou">
    <h1>Thank you</h1>
    <form @submit.prevent="handleSubmit">
      <label for="msg">
        Message
        <input id="msg" type="text" v-model="tmsg.comments">
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'thankyou',
  data () {
    return {
      tmsg: {
        employeeUserid: '',
        location: {
          latitude: 0,
          longitude: 0
        },
        eventDate: new Date('1995-12-17T03:24:00').toJSON(),
        comments: '',
        serviceIconCode: 0,
        emoticonCode: 0
      }
    }
  },
  mounted () {
    // this.getPosts()
  },
  methods: {
    async handleSubmit () {
      console.log(this.tmsg)
      const response = await PostsService.methods.sendThankYouMessage(this.tmsg)
      console.log('submitted successfully' + response)
    }
    // async getPosts () {
    //   const response = await PostsService.fetchPosts()
    //   this.posts = response.data
    //   console.log(this.posts)
    // }
  }
}
</script>
