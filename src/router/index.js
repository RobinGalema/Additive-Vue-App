import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Machines from '../views/Machines'

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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router