/**
 * Created by sailengsi on 2017/5/11.
 */



// console.log(Demo);

export default {
	path          : 'orderstatis',
	name          : '订单统计',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'OrderStatis',
	redirect      : '/demo/orderstatis/bar',
	children      : [{
		path          : 'bar',
		name          : '柱状图',
		icon          : 'reorder',
		component_name: 'Bar',
	}, {
		path          : 'pie',
		name          : '饼状图',
		icon          : 'edit',
		component_name: 'Pie',
	}]
};