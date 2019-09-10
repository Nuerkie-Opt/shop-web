import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './App.vue';
import './theme/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import data from './data';
import routes from './routes.js';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

const store = new Vuex.Store(data)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
