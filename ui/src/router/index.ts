import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/Home.vue";
import Liste from "@/views/Kunst/Liste.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'serverHome',
            component: Home,
            children: [
                {
                    path: '',
                    name: 'ArtList',
                    component: Liste,
                    children: [
                    ]
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ],
})

export default router
