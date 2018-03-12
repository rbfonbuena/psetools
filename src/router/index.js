import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import PrivacyPolicy from '@/components/PrivacyPolicy'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: PrivacyPolicy
    }
  ]
})
