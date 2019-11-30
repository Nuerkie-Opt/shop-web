import Posts from "./Posts.vue";
import Combos from "./Combos.vue";
import Activity from "./Activity.vue";
import Products from "./Products.vue";
import Settings from "./Settings.vue";
import Messages from "./Messages.vue";

export const profileRoutes = [
    {
        path: '',
        component: Products,
        name:"Products"
    },
    {
        path: 'combos',
        component: Combos,
        name:"Combos"
    },
    {
        path: 'posts',
        component: Posts,
        name:"Posts"
    },
    {
        path: 'activity', // likes, follows, followers, reviews, orders
        component: Activity,
        name:"Activity"
    },
    {
        path: '*',
        component: Products,
        name:"ProductsFallBack"
    },
];

export const userProfileRoutes = [
    {
        path: '',
        component: Products,
        name:"UserProducts"
    },
    {
        path: 'combos',
        component: Combos,
        name:"UserCombos"
    },
    {
        path: 'posts',
        component: Posts,
        name:"UserPosts"
    },
    {
        path: 'activity', // likes, follows, followers, reviews, orders
        component: Activity,
        name:"UserActivity"
    },
    {
        path: 'messages',
        component: Messages,
        name:"UserMessages"
    },
    {
        path:'settings',
        component: Settings,
        name:"UserSettings"
    },
    {
        path: '*',
        component: Products,
        name:"UserProductsFallBack"
    },
];