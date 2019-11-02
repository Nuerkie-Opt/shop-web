const mutations = {
    append_products(state, products){
        state.products = products;
        sessionStorage.products = JSON.stringify(state.products);
    },
    append_orders(state, orders ){
        
        state.cart = orders;
        
        sessionStorage.cart = JSON.stringify(state.cart);
    }
};

export default mutations;