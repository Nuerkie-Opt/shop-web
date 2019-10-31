import MenusData from './MenusData.js';
import cartData from './cartData.js';

const data = {
    state : {
        productMatrix: [],
        menus: MenusData,
        cartItems: cartData
    },
    mutations : {
        append_products(state, productRows){
            state.productMatrix = [...state.productMatrix, ...productRows]
        }
    }
};

export default data;