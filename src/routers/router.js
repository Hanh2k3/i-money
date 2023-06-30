import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home_page.vue';
import About from '../views/About_page.vue';

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
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

