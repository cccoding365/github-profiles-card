import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')

const routes = [
    { path: '/about', component: Home },
    { path: '/', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
