import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from './cart/';
import router from './router/';
import leftmenu from './leftmenu/';
import user from './userinfo/';
import global from './global/';

module.exports = new Vuex.Store({
    modules: {
        global,
        cart,
        router,
        leftmenu,
        user
    }
});