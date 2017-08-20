import {Home,Content} from 'layout/';
import Function from 'views/function/';

export default {
	path: '/function',
	name: '静态演示',
	icon: 'inbox',
	component: Home,
	redirect: '/function/open',
	children:[{
		path: 'open',
		name: '公共内容',
		icon: 'inbox',
		component: Content,
		redirect: '/function/open/echarts',
		children: [{
			path: 'echarts',
			name: '图表',
			icon: 'bar-chart',
			component: Function.Open.Echarts
		}, {
			path: 'list',
			name: '列表',
			icon: 'reorder',
			component: Function.Open.List
		}, {
			path: 'form',
			name: '表单',
			icon: 'edit',
			component: Function.Open.Form
		}, {
			path: 'vuex',
			name: 'Vuex',
			icon: 'window-restore',
			component: Function.Open.Vuex
		}, {
			path: 'test404',
			name: '测试404',
			icon: 'window-restore',
			component: Function.Open.Test404
		}]
	}]
};