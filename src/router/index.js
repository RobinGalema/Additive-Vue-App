import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Machines from '../views/Machines'
import Calendar from '../views/Calendar'
import History from '../views/History'

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
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
    },
        {
        path: '/History',
        name: 'History',
        component: History
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router