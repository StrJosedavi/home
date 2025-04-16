import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

export const router = createRouter({
  history: createWebHistory('/home'),
  routes,
});
