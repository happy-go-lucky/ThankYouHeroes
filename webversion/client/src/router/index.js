import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import FirstRoute from '@/components/FirstRoute'
import Welcome from '@/components/Welcome'
import Thankyou from '@/components/Thankyou'
import MyMessages from '@/components/MyMessages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/thank-you',
      name: 'Thankyou',
      component: Thankyou
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/firstroute/:name',
      name: 'FirstRoute',
      component: FirstRoute
    },
    {
      path: '/mymessages',
      name: 'MyMessages',
      component: MyMessages
    }
  ]
})
