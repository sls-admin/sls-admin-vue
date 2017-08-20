/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

export default {
	path     : 'list',
	name     : '列表组件',
	icon     : 'inbox',
	component: Content,
	redirect : '/components/list/default',
	children : [{
		path     : 'default',
		name     : '默认列表',
		icon     : 'reorder',
		component: resolve=>{
			require(['views/components/list/list/'], resolve);
		}
	}, {
		path     : 'datatype',
		name     : '数据类型',
		icon     : 'reorder',
		component: resolve=>{
			require(['views/components/list/data-type/'], resolve);
		}
	}, {
		path     : 'filter',
		name     : '过滤筛选',
		icon     : 'reorder',
		component: resolve=>{
			require(['views/components/list/filter/'], resolve);
		}
	}, {
		path     : 'formatter',
		name     : '格式化',
		icon     : 'reorder',
		component: resolve=>{
			require(['views/components/list/formatter/'], resolve);
		}
	}, {
		path     : 'pagination',
		name     : '分页功能',
		icon     : 'edit',
		component: resolve=>{
			require(['views/components/list/pagination/'], resolve);
		}
	}, {
		path     : 'search',
		name     : '搜索功能',
		icon     : 'edit',
		component: resolve=>{
			require(['views/components/list/search/'], resolve);
		}
	}, {
		path     : 'expand',
		name     : '折叠功能',
		icon     : 'edit',
		component: resolve=>{
			require(['views/components/list/expand/'], resolve);
		}
	}, {
		path     : 'custom-btn',
		name     : '按钮功能',
		icon     : 'edit',
		component: resolve=>{
			require(['views/components/list/custom-btn/'], resolve);
		}
	}]
};