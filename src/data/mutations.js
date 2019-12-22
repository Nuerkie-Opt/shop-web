const mutations = {
    append_products(state, products){
        state.products = products;
        sessionStorage.products = JSON.stringify(state.products);
    },
    set_profile(state, profile){
        state.userprofile = profile;
        sessionStorage.profile = JSON.stringify(profile);
    },
    set_location(state, location){
        state.location = location;
        sessionStorage.location = JSON.stringify(location);
    },
    append_items(state, items){
        state.items = items;
        sessionStorage.items = JSON.stringify(state.items);
    },
    append_orders(state, orders ){
        
        state.cart = orders;
        
        if (orders.length !== 0) {
            sessionStorage.cart = JSON.stringify(state.cart);
        }else{
            sessionStorage.removeItem('cart')
        }
        
    },
    new_delivery(state, delivery){
        state.delivery = delivery;

        sessionStorage.delivery = JSON.stringify(delivery);
    },
    set_menus(state, menus){
        state.menus = menus;

        sessionStorage.menus = JSON.stringify(menus);
    },
    set_item_d(state, itemsD){
        state.itemsD = itemsD;

        sessionStorage.itemsD = JSON.stringify(itemsD);
    },
    set_login(state, status){
        state.isLoggedIn = status;
        if(status){
            localStorage.isLoggedIn = status;
        }
    },
    set_user(state, user){
        state.user = user;

        localStorage.user = JSON.stringify(user);
    },
    set_seller(state, seller){
        state.seller = seller;

        if (Object.keys(seller).length !== 0) {
            sessionStorage.seller = JSON.stringify(state.seller);
        }else{
            sessionStorage.removeItem('seller')
        }
    }
};

export default mutations;