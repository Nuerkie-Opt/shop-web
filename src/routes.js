// pages
import Shop from './pages/Shop.vue';
import Profile from './pages/Profile.vue';
import Admin from './pages/Admin.vue';

// children
import shopRoutes from './components/shop/routes.js';
import profileRoutes from './components/profile/routes.js';
import adminRoutes from './components/admin/routes.js';


const routes = [
    { path:'', component: Shop, children: shopRoutes },
    { path:'profile', component: Profile, children: profileRoutes },
    { path:'admin', component: Admin, children: adminRoutes },
    { path:'*', component: Shop, children: shopRoutes }
];

export default routes;