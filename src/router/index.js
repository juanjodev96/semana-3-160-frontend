import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "login",
    component: Login,
    meta: {
      isAuth: true
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,

    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    next();
  }
  if (to.matched.some(record => record.meta.isAuth)) {
    if (localStorage.getItem("jwt") != null) {
      next({
        path: "/home"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router