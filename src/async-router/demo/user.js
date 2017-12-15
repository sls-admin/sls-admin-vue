/**
 * Created by sailengsi on 2017/5/11.
 */


// console.log(Demo);

export default {
	path          : 'user',
	name          : '用户管理',
	icon          : 'inbox',
	component_path: 'User',
	component_name: 'Content',
	redirect      : '/demo/user/list',
	children      : [{
		path          : 'list',
		name          : '用户列表',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'edit',
		name          : '编辑用户',
		icon          : 'reorder',
		component_name: 'Edit',
	}]
};