/**
 * Created by sailengsi on 2017/5/11.
 */


import {Content} from 'layout/';


export default {
	path: 'orderstatis',
	name: '订单统计',
	icon: 'inbox',
	component: Content,
	redirect: '/demo/orderstatis/bar',
	children: [{
		path: 'bar',
		name: '柱状图',
		icon: 'reorder',
		component: resolve=>{
			require(['views/demo/order-statis/bar/'], resolve);
		}
	}, {
		path: 'pie',
		name: '饼状图',
		icon: 'edit',
		component: resolve=>{
			require(['views/demo/order-statis/pie/'], resolve);
		}
	}]
};