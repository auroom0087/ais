import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",

        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: '/events',
        name: 'Events',
        component: () =>
            import ('../views/Events.vue')
    },
    {
        path: '/guests',
        name: 'Guests',
        component: () =>
            import ('../views/Guests.vue')
    },
    {
        path: '/map',
        name: 'Map',
        component: () =>
            import ('../views/Map.vue')
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () =>
            import ('../views/User.vue')
    },
    {
        path: '/add',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;