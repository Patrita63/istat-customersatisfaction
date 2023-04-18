import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import './assets/app.scss';


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
