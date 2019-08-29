import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vant from "vant";
import "../node_modules/vant/lib/index.css";
import FooterBar from "./components/FooterBar";

Vue.component("footer-bar",FooterBar);
Vue.use(vant);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
