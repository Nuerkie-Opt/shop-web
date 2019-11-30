// pages
import Shop from './pages/Shop.vue';
import Profile from './pages/Profile.vue';
import UserProfile from './pages/UserProfile.vue';
import Admin from './pages/Admin.vue';

// children
import shopRoutes from './components/shop/routes.js';
import { profileRoutes, userProfileRoutes } from './components/profile/routes.js';
import adminRoutes from './components/admin/routes.js';


const routes = [
    { path:'', component: Shop, children: shopRoutes, name:'Shop' },
    {path:'/profile', component: UserProfile, children: userProfileRoutes, name:'UserProfile' },
    { path:'/p/:user', component: Profile, children: profileRoutes, name:'Profile' },
    { path:'/a', component: Admin, children: adminRoutes, name:'Admin' },
    { path:'*', component: Shop, children: shopRoutes, name:'ShopFallBack' }
];

export default routes;