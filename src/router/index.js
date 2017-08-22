/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Login from '../views/login/';
// console.log(Functions.Open);

import Adv from './adv/';
import Function from './function/';
import Demo from './demo/';
import Components from './components/';

import {store} from 'utils/';

var user_routes = store.get('user_routes') || [];
/*user_routes.forEach((one, one_key) => {
	one.component = Home;
	one.children.forEach((two, two_key) => {
		two.component = Content;
		two.children.forEach((route, route_key) => {
			var page = route.component;
			route.component = Functions.Open[page];
		});
	});
});
console.log(user_routes);
console.log('init router.js');*/


var default_routes = [
	{
		path  : '/',
		hidden: true,
		redirect (to) {
			return 'login';
		}
	}, {
		path     : '/login',
		hidden   : true,
		component: Login,
	},
	Function, Demo, Components, Adv
];


/*user_routes.forEach(item=>{
	default_routes.push(item);
});*/

export default new Router({
	routes: default_routes
})