import { createRouter,createWebHistory } from "vue-router"

const router = createRouter({
    history:createWebHistory("/"),
    routes:[
        {
            path:"/home",
            name:"Home",
            component:()=>import("@/views/page/home.vue")
        }
    ]
})

export default router;
