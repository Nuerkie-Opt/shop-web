const getters = {
    cartItems(state){
        if (Object.keys(state.cart).length !== 0) {
            return state.cart;
        }

        if(sessionStorage.cart){
            return JSON.parse(sessionStorage.cart);
        }

        return false;
    },
    productMatrix(state){
        if (state.products.length !== 0) {
            return state.products;
        }

        if(sessionStorage.products){
            return JSON.parse(sessionStorage.products);
        }
        
        return false;
    },
    cartCount(state, getters){
        return Object.keys(getters.cartItems).length;
    },
    getDelivery(state){
        if (Object.keys(state.delivery).length !== 0) {
            return state.delivery;
        }

        if(sessionStorage.delivery){
            return JSON.parse(sessionStorage.delivery);
        }
        
        return false;
    }
};

export default getters;