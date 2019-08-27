import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Mine from "./views/Mine";
import Setting from "./views/Setting";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/Mine",
      component: Mine
    },
    {
      path: "/Setting",
      component: Setting
    }
  ]
})
