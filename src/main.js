// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import axios from 'axios'
import '@/assets/rem.js'
import '@/assets/reset.css'
import  { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore);
//axios 全局配置
axios.interceptors.response.use(
    response => response.data
);
axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Access-Control-Allow-Credentials': true
};
axios.defaults.transformRequest = [data => qs.stringify(data)];
axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
