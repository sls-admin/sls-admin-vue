/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../views/login/';

import Adv from './adv/';
import Function from './function/';
import Demo from './demo/';
import Components from './components/';

import {store, asyncRouter} from 'utils/';

var user_routes = store.get('user_routes') || [];

var res = asyncRouter(user_routes);
console.log(res);


export default new Router({
	routes: [
		{
			path    : '/',
			hidden  : true,
			redirect: 'login',
		}, {
			path          : '/login',
			hidden        : true,
			component     : Login,
			component_name: 'Login',
		},
		// Function, Demo, Components, Adv
	].concat(res)
});