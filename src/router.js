import { createRouter, createWebHistory } from "vue-router";
import MyHome from './pages/MyHome.vue';
import MyCars from './pages/MyCars.vue';
import SingleCar from './pages/SingleCar.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: MyHome
        
        },
        {
            path: '/cars',
            name: 'cars',
            component: MyCars
        
        },
        {
            path: '/cars/:id',
            name: 'single_car',
            component: SingleCar
        
        },
        
    ],

})

export {router};