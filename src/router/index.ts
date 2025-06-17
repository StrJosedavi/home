import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import NotFound from '../pages/NotFound.vue';

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', component: Main },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ],
});
