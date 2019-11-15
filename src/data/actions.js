
const actions = {
    makeRows(state, products) {
        return new Promise((resolve, reject) => {
            let productRows = [];
            let i = 0;
            while (true) {
                productRows.push(products.slice(4 * i, 4 * (i + 1)));
                if (4 * (i + 1) >= products.length) {
                    break;
                }
                i++;
            }
            resolve(productRows);
        });
    },
    loadProducts({ commit, dispatch, getters }, args) {
        return new Promise((resolve, reject) => {
            const payload = {
                "111": {
                    get_items: args.params,
                    "000": ["get_items"]
                },
                "000": ["111"]
            };
            // show loader
            args.actions
                .post("/action", payload)
                .then(response => {
                    // handle success
                    // console.log(response);
                    const data = response.data["111"].get_items['data'];
                    commit('append_products', [...getters.productMatrix, ...data]);
                    resolve(data.length===0);
                })
                .catch(error => reject());
        });
    },
    loadItems({ commit, getters }, args) {
        return new Promise((resolve, reject) => {
            const payload = {
                "111": {
                    get_items: args.params,
                    "000": ["get_items"]
                },
                "000": ["111"]
            };
            // show loader
            args.actions
                .post("/action", payload)
                .then(response => {
                    // handle success
                    // console.log(response);
                    const data = response.data["111"].get_items['data'];
                                      
                    commit('append_items', [...getters.itemMatrix, ...data]);
                    resolve(data.length===0);
                })
                .catch(error => reject());
        });
    },
    loadItemsD({ commit, getters }, args) {
        return new Promise((resolve, reject) => {
            const payload = {
                "111": {
                    fetch_item: args.params,
                    "000": ["fetch_item"]
                },
                "000": ["111"]
            };
            // show loader
            args.actions
                .post("/action", payload)
                .then(response => {
                    // handle success
                    // console.log(response);
                    const data = response.data["111"].fetch_item['data'];
                                      
                    commit('set_item_d', Object.assign({}, getters.itemsD, data));
                    resolve(Object.values(data).length===0);
                })
                .catch(error => reject());
        });
    },
    append_order({ commit, getters }, order) {

        commit('append_orders', { ...getters.cartItems, ...order });
    },
    remove_order({ commit, getters }, order_id) {
        const orders = Object.keys(getters.cartItems)
            .reduce((acc, key) => key == order_id ?
                acc : ({ ...acc, [key]: getters.cartItems[key] }),
                {}
            );

        commit('append_orders', orders);
    },
    change_delivery({commit}, delivery){
        commit('new_delivery', delivery);
    }
};

export default actions;