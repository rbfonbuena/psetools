// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import './assets/scss/main.scss'
import App from './App'
import router from './router'
import Filters from 'vue2-filters'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Filters)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
