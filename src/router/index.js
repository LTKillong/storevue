import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import About from "@/views/About";
import Register from "@/views/Register";
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component:About
    },
    {
        path: '/login',
        name:'Login',
        component: Login,

    },
    {
        path: '/register',
        name:'Register',
        component: Register,

        props({query:{title}}){
            return{
                title
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
