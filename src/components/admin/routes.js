import DescriptiveAnalytics from './DescriptiveAnalytics.vue';
import PredictiveAnalytics from './PredictiveAnalytics.vue';
import AdminDashboard from './AdminDashboard.vue';
import AdminSettings from './AdminSettings.vue';
import AccountSwitch from './AccountSwitch.vue';
import OrdersItems from './OrdersItems.vue';
import OrdersList from './OrdersList.vue';
import ItemsList from './ItemsList.vue';
import ItemsPlus from './ItemsPlus.vue';
import ItemDetail from './ItemDetail.vue';
import ItemEdit from './ItemEdit.vue';
import EditUser from './EditUser.vue';
import NewUser from './NewUser.vue';
import Users from './Users.vue';


const adminRoutes = [
    {
        path:'',
        component:AdminDashboard,
        name:'AdminDashboardDefault'
    },
    {
        path:'dashboard',
        component:AdminDashboard,
        name:"AdminDashboard"
    },
    {
        path:'settings',
        component:AdminSettings,
        name:"AdminSettings"
    },
    {
        path:'items',
        component:ItemsList,
        name:"ItemsList"
    },
    {
        path:'items/plus',
        component:ItemsPlus,
        name:"ItemsPlus"

    },
    {
        path:'item/edit/:item',
        component:ItemEdit,
        name:"ItemEdit"
    },
    {
        path:'item/view/:item',
        component:ItemDetail,
        name:"ItemDetail"
    },
    {
        path:'orders',
        component:OrdersList,
        name:"OrdersList"
    },
    {
        path:'orders/items',
        component:OrdersItems,
        name:"OrdersItems"
    },
    {
        path:'analytics',
        component:DescriptiveAnalytics,
        name:"Analytics"
    },
    {
        path:'analytics/desc',
        component:DescriptiveAnalytics,
        name:"DescriptiveAnalytics"
    },
    {
        path:'analytics/pred',
        component:PredictiveAnalytics,
        name:"PredictiveAnalytics"
    },
    {
        path:'users',
        component: Users,
        name:"Users"
    },
    {
        path:'users/new',
        component: NewUser,
        name:"NewUser"
    },
    {
        path:'users/edit/:user',
        component: EditUser,
        name:"EditUser"
    },
    ,
    {
        path:'seller/switch',
        component: AccountSwitch,
        name:"AccountSwitch"
    },
    {
        path:'*',
        component:AdminDashboard,
        name:"AdminDashboardFallBack"
    }
];

export default adminRoutes;