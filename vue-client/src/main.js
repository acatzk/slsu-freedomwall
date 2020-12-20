import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { firebase, apolloProvider } from '@/services'
import './auth'
import './assets/styles/index.css'

Vue.config.productionTip = false

let app = ''

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      apolloProvider,
      render: h => h(App)
    }).$mount('#app')    
  }
})