import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import App from './App.vue';
import './theme/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from 'axios';
import data from './data';
import routes from './routes.js';
import eventBus from './eventBus.js';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);

const store = new Vuex.Store(data);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.prototype.$eventBus = eventBus;

Vue.prototype.$actions = axios.create({
  url: '/action',
  baseURL: Vue.config.devtools ? 'http://localhost:8002' : 'http://localhost:8002',
  method: 'post'
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
