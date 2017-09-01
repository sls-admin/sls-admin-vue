/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from '../../views/container/';

import Permis from '../../views/page/permis/';

export default {
	path     : 'route',
	name     : '路由管理',
	icon     : 'inbox',
	component: Container.Content,
	redirect : '/permis/route/list',
	children : [{
		path     : 'list',
		name     : '路由列表',
		icon     : 'reorder',
		component: Permis.Route.List
	}, {
		path     : 'edit',
		name     : '编辑用户',
		icon     : 'edit',
		component: Permis.Route.Edit
	}]
};