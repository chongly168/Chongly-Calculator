import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Calculator from "@/pages/Calculator.vue";
import Loops from "@/pages/Loops.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/About",
        name: "About",
        component: About,
    },
    {
        path: "/Calculator",
        name: "Calculator",
        component: Calculator,
    },
    {
        path: "/Loops",
        name: "Loops",
        component: Loops,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;