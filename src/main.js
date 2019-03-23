import Vue from 'vue'
import App from './App.vue'
import LoadingPlugin from './plugins/loading'

Vue.config.productionTip = false

Vue.use(LoadingPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
