import Vue from 'vue'
import VueRouter from 'vue-router'
import {initRoutes} from './routes/init'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: initRoutes
})

