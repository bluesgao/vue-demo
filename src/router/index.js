import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {
        path:"/login",
        component:()=> import("@/views/login.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})


export default router

