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
import locale from 'element-ui/lib/locale/lang/en'
import { browserFingerPrint, baseURL } from "./utils.js";

Vue.use(ElementUI, { locale })
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(data);

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

Vue.prototype.$eventBus = eventBus;

Vue.prototype.$browser = async () => await browserFingerPrint();

Vue.prototype.$actions = axios.create({
  baseURL: baseURL,
});

Vue.prototype.$urlTo = (url, to) => {
    const trans = {
      'g':'t_af_gallery_400',
      't':'t_af_thumb_150',
      'f':'t_af_eco_1024'
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
