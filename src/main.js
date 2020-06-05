import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import SwedishPlayersOnly from "./SwedishPlayersOnly.vue"
import Search from "./Search.vue"
import DatabasePage from "./DatabasePage.vue"
import './main.css'
import { store } from "./store/store"
import { createProvider } from './vue-apollo'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes =[
  { path: "/swedishPlayersOnly", component: SwedishPlayersOnly},
  { path: "/search", component: Search},
  { path: "/databasePage", component: DatabasePage}
]

const router = new VueRouter({
routes: routes,
mode: 'history'
})

new Vue({
  store: store,
  router: router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
