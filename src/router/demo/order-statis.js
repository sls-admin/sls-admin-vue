/**
 * Created by sailengsi on 2017/5/11.
 */


import Container from '../../views/container/';

import Demo from '../../views/page/demo/';

// console.log(Demo);

export default {
	path          : 'orderstatis',
	name          : '订单统计',
	icon          : 'inbox',
	component     : Container.Content,
	component_name: 'Content',
	component_path: 'OrderStatis',
	redirect      : '/demo/orderstatis/bar',
	children      : [{
		path          : 'bar',
		name          : '柱状图',
		icon          : 'reorder',
		component_name: 'Bar',
		component     : Demo.OrderStatis.Bar
	}, {
		path          : 'pie',
		name          : '饼状图',
		icon          : 'edit',
		component_name: 'Pie',
		component     : Demo.OrderStatis.Pie
	}]
};