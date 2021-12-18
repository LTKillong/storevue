import {createRouter, createWebHistory} from 'vue-router'
import ItemList from "@/views/ItemList";
const routes = [
    {
        path: '/items',
        name: 'Items',
        component: ItemList,
        props($route){
            return{
                formData:$route.params.formData[0]
            }
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
