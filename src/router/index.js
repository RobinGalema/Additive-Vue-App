import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Machines from '../views/Machines'
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
        path: '/machines/:printerId',
        name: 'MachineDetails',
        component: MachineDetails
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router