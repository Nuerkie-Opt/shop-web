const mutations = {
    append_products(state, products){
        state.products = products;
        sessionStorage.products = JSON.stringify(state.products);
    },
    set_profile(state, profile){
        state.profile = profile;
    },
    append_items(state, items){
        state.items = items;
        sessionStorage.items = JSON.stringify(state.items);
    },
    append_orders(state, orders ){
        
        state.cart = orders;
        
        if (Object.keys(orders).length !== 0) {
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
    }
};

export default mutations;