
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
    loadItems({ commit, dispatch, getters }, actions) {
        return new Promise((resolve, reject) => {
            const payload = {
                "111": {
                    get_items: { limit: 10 },
                    "000": ["get_items"]
                },
                "000": ["111"]
            };
            // show loader
            actions
                .post("/action", payload)
                .then(response => {
                    // handle success
                    // console.log(response);
                    const data = response.data["111"].get_items;
                    dispatch('makeRows', data).then(rows => {
                        commit('append_products', [...getters.productMatrix, ...rows]);
                    });


                    resolve();
                })
                .catch(error => {
                    reject();
                    // handle error
                    // console.log(error);
                })
                .finally(() => {
                    resolve();
                    // always executed
                    // remove loader
                });
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