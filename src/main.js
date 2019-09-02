import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSimpleMarkdown from 'vue-simple-markdown'

Vue.use(VueSimpleMarkdown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
