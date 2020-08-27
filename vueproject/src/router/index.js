import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/HomePage'
import ContactPage from '@/components/ContactPage'
//import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/ContactPage',
      name: 'ContactPage',
      component: ContactPage
    }
    
  ]
})
