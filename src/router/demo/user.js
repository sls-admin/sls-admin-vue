/**
 * Created by sailengsi on 2017/5/11.
 */


import Container from '../../views/container/';

import Demo from '../../views/page/demo/';

// console.log(Demo);

export default {
	path          : 'user',
	name          : '用户管理',
	icon          : 'inbox',
	component_path: 'User',
	component_name: 'Content',
	component     : Container.Content,
	redirect      : '/demo/user/list',
	children      : [{
		path          : 'list',
		name          : '用户列表',
		icon          : 'reorder',
		component_name: 'List',
		component     : Demo.User.List
	}, {
		path          : 'edit',
		name          : '编辑用户',
		icon          : 'reorder',
		component_name: 'Edit',
		component     : Demo.User.Edit
	}]
};