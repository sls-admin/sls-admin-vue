/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

export default {
	path: 'user',
	name: 'user-manager',
	icon: 'inbox',
	component: Content,
	redirect: '/adv/user/list',
	children: [{
		path: 'list',
		name: 'user-list',
		icon: 'reorder',
		component: resolve=>{
			require(['views/adv/user/list/'], resolve);
		}
	}, {
		path: 'edit',
		name: 'user-edit',
		icon: 'edit',
		component: resolve=>{
			require(['views/adv/user/edit/'], resolve);
		}
	}]
};