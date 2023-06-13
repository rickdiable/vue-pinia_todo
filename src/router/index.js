import { createRouter, createWebHashHistory } from 'vue-router';
import Todo from '../views/VueTodo.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    // component: () => import('../views/VueTodo.vue'),
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
