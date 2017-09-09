/**
 * Created by sailengsi on 2017/5/11.
 */

export default {
	path          : 'open',
	name          : '公共内容',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Open',
	redirect      : '/function/open/echarts',
	children      : [{
		path          : 'echarts',
		name          : '图表',
		icon          : 'bar-chart',
		component_name: 'Echarts',
	}, {
		path          : 'list',
		name          : '列表',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'form',
		name          : '表单',
		icon          : 'edit',
		component_name: 'Form',
	}, {
		path          : 'vuex',
		name          : 'Vuex',
		icon          : 'window-restore',
		component_name: 'Vuex',
	}, {
		path          : 'test404',
		name          : '测试404',
		icon          : 'window-restore',
		component_name: 'Test404',
	}]
};