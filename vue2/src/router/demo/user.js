/**
 * Created by sailengsi on 2017/5/11.
 */


import {Content} from 'layout/';

import {Demo} from 'views/';

// console.log(Demo);

export default {
	path: 'user',
	name: '用户管理',
	icon: 'inbox',
	component: Content,
	redirect: '/demo/user/list',
	children: [{
		path: 'list',
		name: '用户列表',
		icon: 'reorder',
		component: Demo.User.List
	}, {
		path: 'edit',
		name: '编辑用户',
		icon: 'edit',
		component: Demo.User.Edit
	}, {
		path: 'access',
		hidden:true,
		name: '设置权限',
		icon: 'edit',
		component: Demo.User.Access
	}]
};