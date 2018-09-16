import Api from '@/services/Api'

export default {
  methods: {
    fetchPosts () {
      return Api().get('posts')
    },
    sendThankYouMessage (msg) {
      return Api().post('new-thank-you', msg)
    }
  }
}
