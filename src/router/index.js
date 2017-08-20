/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import {Home, Content} from 'layout/';
import {Login} from 'views/';

/*import Adv from './adv/';
import Function from './function/';
import Demo from './demo/';
import components from './components/';*/


export default new Router({
	routes: [
		{
			path  : '/',
			hidden: true,
			redirect(to){
				return 'login';
			}
		}, {
			path     : '/login',
			hidden   : true,
			component: resolve=>{
				require(['views/login/'], resolve);
			},
		},
		/*Function,
		Demo,
		components,
		Adv,*/
	]
})