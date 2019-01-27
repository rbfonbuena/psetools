import Vue from 'vue'
// import Element from 'element-ui'
import {
  Col,
  Row,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Table,
  TableColumn,
  Collapse,
  CollapseItem,
  InputNumber
} from 'element-ui'
import './assets/scss/main.scss'
import App from './App.vue'
import router from './router'
import Filters from 'vue2-filters'

Vue.config.productionTip = false
// Vue.use(Element)
Vue.use(Filters)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(InputNumber)
Vue.use(Row)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Collapse)
Vue.use(CollapseItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
