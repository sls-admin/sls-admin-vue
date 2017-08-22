/**
 * Created by sailengsi on 2017/5/11.
 */


import Container from '../../views/container/';

import Demo from '../../views/page/demo/';

// console.log(Demo);

export default {
	path     : 'user',
	name     : '用户管理',
	icon     : 'inbox',
	component: Container.Content,
	redirect : '/demo/user/list',
	children : [{
		path     : 'list',
		name     : '用户列表',
		icon     : 'reorder',
		component: Demo.User.List
	},{
		path     : 'edit',
		name     : '编辑用户',
		icon     : 'reorder',
		component: Demo.User.Edit
	}]
};