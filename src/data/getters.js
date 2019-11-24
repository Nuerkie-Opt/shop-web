const getters = {
    cartItems(state) {
        if (state.cart.length !== 0) {
            return state.cart;
        }

        if (sessionStorage.cart) {
            return JSON.parse(sessionStorage.cart);
        }

        return false;
    },
    productMatrix(state) {
        if (state.products.length !== 0) {
            return state.products;
        }

        if (sessionStorage.products) {
            return JSON.parse(sessionStorage.products);
        }

        return false;
    },
    itemMatrix(state) {
        if (state.items.length !== 0) {
            return state.items;
        }

        if (sessionStorage.items) {
            return JSON.parse(sessionStorage.items);
        }

        return false;
    },
    itemsD(state) {
        if (Object.keys(state.itemsD).length !== 0) {
            return state.itemsD;
        }

        if (sessionStorage.itemsD) {
            return JSON.parse(sessionStorage.itemsD);
        }

        return false;
    },
    cartCount(state, getters) {
        
        return getters.cartItems ? getters.cartItems.length : 0;
    },
    getDelivery(state) {
        if (Object.keys(state.delivery).length !== 0) {
            return state.delivery;
        }

        if (sessionStorage.delivery) {
            return JSON.parse(sessionStorage.delivery);
        }

        return false;
    },
    getMenus(state) {
        if (state.menus.length !== 0) {
            return state.menus;
        }

        if (sessionStorage.menus) {
            return JSON.parse(sessionStorage.menus);
        }

        return false;
    },
    profile(state) {
        if (Object.keys(state.userprofile).length !== 0) {
            return state.userprofile
        }

        if (sessionStorage.profile) {
            return JSON.parse(sessionStorage.profile)
        }

        return {}
    },
    hasProfile(state, getters) {
        return Object.keys(getters.profile).length !== 0;
    },
    isSeller(state, getters) {
        if (getters.profile.user) {
            return getters.profile.user.level === 'seller';
        }
        return false;

    },
    loggedIn(state) {
        const is_logged_in = localStorage.getItem('isLoggedIn');
        let logged_in = true;
        if (!is_logged_in) {
            logged_in = false;
        }
        return state.isLoggedIn || logged_in;

    },
    currentSeller(state) {
        if (Object.keys(state.seller).length !== 0) {
            return state.seller
        }

        if (sessionStorage.seller) {
            return JSON.parse(sessionStorage.seller)
        }

        return false;
    },
    currentUser() {
        let user = localStorage.getItem('user');

        if (user) {
            return JSON.parse(user);
        }

        return false;
    }
};

export default getters;