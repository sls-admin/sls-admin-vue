/**
 * Created by sailengsi on 2017/5/11.
 */



export default {
	path          : 'order',
	name          : '订单管理',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Order',
	redirect      : '/demo/order/list',
	children      : [{
		path          : 'list',
		name          : '订单列表',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'edit',
		name          : '编辑订单',
		icon          : 'edit',
		component_name: 'Edit',
	}]
};