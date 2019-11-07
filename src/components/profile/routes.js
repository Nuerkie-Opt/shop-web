import Posts from "./Posts.vue";
import Combos from "./Combos.vue";
import Activity from "./Activity.vue";
import Products from "./Products.vue";
import Settings from "./Settings.vue";
import Messages from "./Messages.vue";

const profileRoutes = [
    {
        path: '',
        component: Products
    },
    {
        path: 'combos',
        component: Combos
    },
    {
        path: 'posts',
        component: Posts
    },
    {
        path: 'activity', // likes, follows, followers, reviews, orders
        component: Activity
    },
    {
        path: 'messages',
        component: Messages
    },
    {
        path:'settings',
        component: Settings
    },
];

export default profileRoutes;