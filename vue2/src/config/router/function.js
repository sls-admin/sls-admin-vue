/**
 * Created by sailengsi on 2017/4/30.
 */
import {Home,Content} from '../../layout/';
import Modules from '../../views/';

module.exports = [{
	path: '/function',
	name: '静态演示',
	icon: 'inbox',
	component: Home,
	redirect: '/function/open',
	children: [{
		path: 'open',
		name: '公共内容',
		icon: 'inbox',
		component: Content,
		redirect: '/function/open/list',
		children: [{
			path: 'echarts',
			name: '图表',
			icon: 'bar-chart',
			component: Modules.Func.Open.Echarts
		}, {
			path: 'list',
			name: '列表',
			icon: 'reorder',
			component: Modules.Func.Open.List
		}, {
			path: 'form',
			name: '表单',
			icon: 'edit',
			component: Modules.Func.Open.Form
		}, {
			path: 'vuex',
			name: 'Vuex',
			icon: 'window-restore',
			component: Modules.Func.Open.Vuex
		}, {
			path: 'test404',
			name: '测试404',
			icon: 'window-restore',
			component: Modules.Func.Open.Test404
		}]
	}]
}];