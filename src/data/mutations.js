const mutations = {
    append_products(state, products){
        state.products = products;
        sessionStorage.products = JSON.stringify(state.products);
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
    }
};

export default mutations;