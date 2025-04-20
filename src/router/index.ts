import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
});
