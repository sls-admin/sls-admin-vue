/**
 * Created by sailengsi on 2017/5/11.
 */


import {Content} from 'layout/';

import {Components} from 'views/';

export default {
	path: 'list',
	name: '列表组件',
	icon: 'inbox',
	component: Content,
	redirect: '/components/list/default',
	children: [{
		path: 'default',
		name: '默认渲染列表',
		icon: 'reorder',
		component: Components.List.List
	}, {
	 path: 'pagination',
	 name: '分页',
	 icon: 'edit',
	 component: Components.List.Pagination
	 }, {
	 path: 'search',
	 name: '搜索',
	 icon: 'edit',
	 component: Components.List.Search
	 }, {
	 path: 'default-btn',
	 name: '默认按钮',
	 icon: 'edit',
	 component: Components.List.DefaultBtn
	 }, {
	 path: 'custom-btn',
	 name: '自定义按钮',
	 icon: 'edit',
	 component: Components.List.CustomBtn
	 }]
};