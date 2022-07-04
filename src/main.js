import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import routes from './router/routes';

const router = new VueRouter({
  routes,
  mode:'history',
  hash: false
})

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
