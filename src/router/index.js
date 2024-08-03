import { createRouter, createWebHistory } from "vue-router";
// import  CompositionApi from '../components/CompositionApi.vue';
// import Form from '../components/Form1vue';
 import Helloworld from '@/components/HelloWorld.vue';
import Welcomeitems from  '@/components/Form1.vue';
import Form from '@/components/Form1.vue'

const routes= [
        {path:"/", component:Welcomeitems},
        {path:'/form', component:Form},
        {path:"/home", component:Welcomeitems},
        {path:"/hello", component:Helloworld},
        {path:"/Home", redirect:'/home'},
        {path: "/product/:id", component:Helloworld}, //parametized routing

        //Nested Routing
        {path:'/products', children:[
            {path:'hello', component:Welcomeitems},
        ]},

        {path:"/:catchAll(.*)", component:Welcomeitems}, //wildcart routing or page not found

]


export const router = createRouter({
    history: createWebHistory(),
    routes
})

