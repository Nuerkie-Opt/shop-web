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
  baseURL: Vue.config.devtools ? 'http://localhost:8002' : 'http://localhost:8002',
});

Vue.prototype.$urlTo = (url, to) => {
    const trans = {
      'g':'t_af_gallery_400',
      't':'t_af_thumb_150',
      'f':'t_af_eco_1000'
    };
    url = url.split('/');
    const index = url.indexOf('upload')+1;
    url.splice(index, 0, trans[to]);
    return url.join('/');

};

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
