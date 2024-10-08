import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'

const routes =[
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: ()=> import('@/views/Register.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: ()=> import('@/views/Home.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router;