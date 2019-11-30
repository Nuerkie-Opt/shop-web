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
import VueAnalytics from 'vue-analytics';
import SocialSharing from 'vue-social-sharing';

Vue.use(ElementUI, { locale })
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(SocialSharing);

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

Vue.prototype.$openMediaUrl = (media) => {
  let url = "https://";
  switch (media) {
    case "facebook":
      url += "facebook.com/shop.africaniz";
      break;
    case "twitter":
      url += "twitter.com/shop_africaniz";
      break;
    case "instagram":
      url += "instagram.com/shop.africaniz/";
      break;
    case "form":
      url += "forms.gle/1H2DZfctVreiKS8Z6";
    default:
      break;
  }

  window.open(url,"_blank");
}

Vue.use(VueAnalytics, {
  id:'UA-153103867-1',
  router,
  autoTracking:{
    exception:true,
    screenview: true,
    pageviewOnLoad: false

  },
  debug:{
    enabled:Vue.config.devtools,
    sendHitTask:!Vue.config.devtools
  },
  ecommerce: {
    enabled: true,
    enhanced: true
  }
});


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
