import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import("@/views/home/HomePage.vue")
    },
    {
        path: '/projects',
        component: () => import("@/views/project/ProjectPage.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router