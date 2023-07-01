import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/index.vue';
import About from '../views/about.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    meta: {
      layout: 'auth'
    },
    component: About 
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: 'auth'
    },
    component: () =>  
      import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'auth'
    },
    component: () =>  
      import(/* webpackChunkName: "login" */ '../views/login.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

