import { createRouter, createWebHistory } from 'vue-router';
import home from '../view/Home.vue';
import todo from '../view/Todo.vue';
import completed from '../view/Completed.vue';

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
        },
        {
            path: '/completed',
            component: completed
        }
    ]
});

export default router;
  