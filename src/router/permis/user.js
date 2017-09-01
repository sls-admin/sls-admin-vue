/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from '../../views/container/';

import Permis from '../../views/page/permis/';

export default {
	path     : 'user',
	name     : '用户管理',
	icon     : 'inbox',
	component: Container.Content,
	redirect : '/permis/user/list',
	children : [{
		path     : 'list',
		name     : '用户列表',
		icon     : 'reorder',
		component: Permis.User.List
	}, {
		path     : 'edit',
		name     : '编辑用户',
		icon     : 'edit',
		component: Permis.User.Edit
	}]
};