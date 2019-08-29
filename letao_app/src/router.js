import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Mine from "./views/Mine";
import Setting from "./views/Setting";
import Cart from "./views/Cart";
import Sort from "./views/Sort";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/Login",
      component: Login
    },
    {
      path: "/Register",
      component: Register
    },
    {
      path: "/Mine",
      component: Mine
    },
    {
      path: "/Setting",
      component: Setting
    },
    {
      path: "/Sort",
      component: Sort
    },
    {
      path: "/Cart",
      component: Cart
    }
  ]
});
