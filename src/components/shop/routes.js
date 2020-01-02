import ItemDisplay from './ItemDisplay.vue';
import ItemDetails from './ItemDetails.vue';
import Combos from './Combinations.vue';
import Checkout from './Checkout.vue';
import Social from './Social.vue';
import Cart from './Cart.vue';
import Auth from './Auth.vue';


import Login from './elements/Login.vue';
import Register from './elements/Register.vue';
import Reset from './elements/Reset.vue';

const shopRoutes = [
    {
        path:'',
        component:ItemDisplay,
        name:"ItemDisplay"
    },
    {
        path:'s/:c/:t*',
        component:ItemDisplay,
        name:"ItemDispalySearch"
    },
    {
        path:'auth/',
        component:Auth,
        name:"Auth",
        children:[
            {
                path:'login',
                component:Login,
                name:"Login"
            },
            {
                path:'register',
                component:Register,
                name:"Register"
            },
            {
                path:'reset',
                component:Reset,
                name:"Reset"
            }
        ]
    },
    {
        path:'combinations',
        component:Combos,
        name:"Combinations"
    },
    {
        path:'items/:item/',
        component:ItemDetails,
        name:"ItemDetails"
    },
    {
        path: 'checkout',
        component: Checkout,
        name:"Checkout"
    },
    {
        path: 'cart',
        component: Cart,
        name:"Cart"
    },
    {
        path: 'social/:media',
        component: Social,
        name:"Social"
    },
    {
        path:'search/:query',
        name:"Search"
    }
];

export default shopRoutes;