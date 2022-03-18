import { createWebHistory, createRouter } from 'vue-router'

import Login from "@/components/Login"
import Home from '@/components/Home'
import Sign from '@/components/Sign'
import Admin from '@/components/Admin'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/sign',
        name: 'Sign',
        component: Sign
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/:PathMatch(.*)*',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
