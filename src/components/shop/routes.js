import ItemDisplay from './ItemDisplay.vue';
import ItemDetails from './ItemDetails.vue';
import Auth from './Auth.vue';


import Login from '../elements/Login.vue';
import Register from '../elements/Register.vue';
import Reset from '../elements/Reset.vue';

const shopRoutes = [
    {
        path:'',
        component:ItemDisplay
    },
    {
        path:'auth',
        component:Auth,
        children:[
            {
                path:'login',
                component:Login,

            },
            {
                path:'register',
                component:Register,
            },
            {
                path:'reset',
                component:Reset,
            }
        ]
    },
    {
        path:'items/:item',
        component:ItemDetails
    },
    {
        path:'search/:query'
    }
];

export default shopRoutes;