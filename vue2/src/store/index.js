import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from './cart/';
import router from './router/';
import leftmenu from './leftmenu/';
import user from './userinfo/';

module.exports = new Vuex.Store({
	modules: {
		cart,
		router,
		leftmenu,
		user
	}
});