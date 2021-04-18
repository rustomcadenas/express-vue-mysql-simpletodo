import { createRouter, createWebHistory } from 'vue-router';
import home from '../view/Home.vue';
import todo from '../view/Todo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/todo',
            component: todo
        }
    ]
});

export default router;
  