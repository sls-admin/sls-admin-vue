/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

export default {
	path: 'open',
	name: '公共内容',
	icon: 'inbox',
	component: Content,
	redirect: '/function/open/echarts',
	children: [{
		path: 'echarts',
		name: '图表',
		icon: 'bar-chart',
		component: resolve=>{
			require(['views/function/open/echarts/'], resolve);
		}
	}, {
		path: 'list',
		name: '列表',
		icon: 'reorder',
		component: resolve=>{
			require(['views/function/open/list/'], resolve);
		}
	}, {
		path: 'form',
		name: '表单',
		icon: 'edit',
		component: resolve=>{
			require(['views/function/open/form/'], resolve);
		}
	}, {
		path: 'vuex',
		name: 'Vuex',
		icon: 'window-restore',
		component: resolve=>{
			require(['views/function/open/vuex/'], resolve);
		}
	}, {
		path: 'test404',
		name: '测试404',
		icon: 'window-restore',
		component: resolve=>{
			require(['views/function/open/test404/'], resolve);
		}
	}]
};