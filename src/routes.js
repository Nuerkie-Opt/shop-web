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
    { path:'', component: Shop, children: shopRoutes },
    {path:'/profile', component: UserProfile, children: userProfileRoutes },
    { path:'/p/:user', component: Profile, children: profileRoutes },
    { path:'/a', component: Admin, children: adminRoutes },
    { path:'*', component: Shop, children: shopRoutes }
];

export default routes;