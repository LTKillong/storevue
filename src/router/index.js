import {createRouter, createWebHistory} from 'vue-router'
import ItemList from "@/views/ItemList";
const routes = [
    {
        path: '/items',
        name: 'Items',
        component: ItemList,
        // props($route){
        //     console.log(typeof $route.params.smart[0]);
        //     return{
        //
        //     }
        // }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
