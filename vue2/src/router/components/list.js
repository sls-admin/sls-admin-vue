/**
 * Created by sailengsi on 2017/5/11.
 */


import {Content} from 'layout/';

import {Components} from 'views/';

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
		component: Components.List.List
	}, {
		path     : 'datatype',
		name     : '数据类型',
		icon     : 'reorder',
		component: Components.List.DataType
	}, {
		path     : 'filter',
		name     : '过滤筛选',
		icon     : 'reorder',
		component: Components.List.Filter
	}, {
		path     : 'formatter',
		name     : '格式化',
		icon     : 'reorder',
		component: Components.List.Formatter
	}, {
		path     : 'pagination',
		name     : '分页功能',
		icon     : 'edit',
		component: Components.List.Pagination
	}, {
		path     : 'search',
		name     : '搜索功能',
		icon     : 'edit',
		component: Components.List.Search
	}, {
		path     : 'expand',
		name     : '折叠功能',
		icon     : 'edit',
		component: Components.List.Expand
	}, {
		path     : 'custom-btn',
		name     : '按钮功能',
		icon     : 'edit',
		component: Components.List.CustomBtn
	}]
};