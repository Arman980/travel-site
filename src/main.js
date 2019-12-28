import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueFlip from 'vue-flip'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  vueFlip,
  render: h => h(App)
}).$mount('#app')
