import { createRouter, createWebHistory } from 'vue-router'
import Admin from "@/views/Admin/Admin.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            name: 'adminHome',
            component: Admin,
            children: [
            ],
        }
    ],
});

export default  router
