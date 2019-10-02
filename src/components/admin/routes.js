import DescriptiveAnalytics from './DescriptiveAnalytics.vue';
import PredictiveAnalytics from './PredictiveAnalytics.vue';
import AdminDashboard from './AdminDashboard.vue';
import AdminSettings from './AdminSettings.vue';
import OrdersItems from './OrdersItems.vue';
import OrdersMoney from './OrdersMoney.vue';
import OrdersList from './OrdersList.vue';
import ItemsList from './ItemsList.vue';
import ItemsPlus from './ItemsPlus.vue';


const adminRoutes = [
    {
        path:'',
        component:AdminDashboard
    },
    {
        path:'dashboard',
        component:AdminDashboard
    },
    {
        path:'settings',
        component:AdminSettings
    },
    {
        path:'items',
        component:ItemsList,
        children:[
            {
                path:'plus',
                component:ItemsPlus,

            }
        ]
    },
    {
        path:'orders',
        component:OrdersList,
        children:[
            {
                path:'items',
                component:OrdersItems,

            },
            {
                path:'money',
                component:OrdersMoney,

            }
        ]
    },
    {
        path:'analytics',
        component:DescriptiveAnalytics,
        children:[
            {
                path:'desc',
                component:DescriptiveAnalytics,

            },
            {
                path:'pred',
                component:PredictiveAnalytics,

            }
        ]
    }
];

export default adminRoutes;