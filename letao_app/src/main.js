import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Vant from "vant";
import "../node_modules/vant/lib/index.css";
import {Lazyload} from "vant";

Vue.prototype.axios = axios;
Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
