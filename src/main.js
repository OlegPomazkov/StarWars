import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router"
import axios from 'axios'

axios.defaults.baseURL = 'https://swapi.co/api/';

Vue.config.productionTip = false

const app = {
  router,
  store,
  render: h => h(App)
};

Vue.prototype.$axios = axios;
app.store.$axios = axios;

new Vue(app).$mount("#app");