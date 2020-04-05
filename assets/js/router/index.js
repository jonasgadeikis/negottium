import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Boards from '../views/Boards/Index';
import Board from '../views/Boards/Board/Index';
import Login from '../views/Login/Index';
import Register from '../views/Register/Index';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/boards',
        component: Boards,
    },
    {
        path: '/board/:id',
        component: Board,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});
