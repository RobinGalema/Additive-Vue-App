import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Machines from '../views/Machines'
import Calendar from '../views/Calendar'
import History from '../views/History'
import Notifications from '../views/Notifications'
import MachineDetails from '../views/MachineDetails'

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
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications
    },
    {
        path: '/machines/:printerId',
        name: 'MachineDetails',
        component: MachineDetails
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router