import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Machines from '../views/Machines'
import Notifications from '../views/Notifications'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/machines',
        name: 'Machines',
        component: Machines
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router