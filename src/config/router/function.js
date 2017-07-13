/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

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
			component: Modules.Function.Open.Echarts
		}, {
			path: 'list',
			name: '列表',
			icon: 'reorder',
			component: Modules.Function.Open.List
		}, {
			path: 'form',
			name: '表单',
			icon: 'edit',
			component: Modules.Function.Open.Form
		}, {
			path: 'vuex',
			name: 'Vuex',
			icon: 'window-restore',
			component: Modules.Function.Open.Vuex
		}, {
			path: 'test404',
			name: '测试404',
			icon: 'window-restore',
			component: Modules.Function.Open.Test404
		}]
	}]
}];