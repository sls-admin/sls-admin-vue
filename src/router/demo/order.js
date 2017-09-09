/**
 * Created by sailengsi on 2017/5/11.
 */


import Container from '../../views/container/';

import Demo from '../../views/page/demo/';

export default {
	path          : 'order',
	name          : '订单管理',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Order',
	component     : Container.Content,
	redirect      : '/demo/order/list',
	children      : [{
		path          : 'list',
		name          : '订单列表',
		icon          : 'reorder',
		component_name: 'List',
		component     : Demo.Order.List
	}, {
		path          : 'edit',
		name          : '编辑订单',
		icon          : 'edit',
		component_name: 'Edit',
		component     : Demo.Order.Edit
	}]
};