/**
 * Created by sailengsi on 2017/4/30.
 */

import {Home,Content} from '../../layout/';
import Modules from '../../views/';

module.exports = [{
	path: '/components',
	name: '组件封装',
	icon: 'inbox',
	component: Home,
	redirect: '/components/form',
	children: [{
		path: 'form',
		name: '表单组件',
		icon: 'inbox',
		component: Modules.Components.Form.Form,
		redirect: '/components/form/input',
		children: [{
			path: 'input',
			name: 'input框',
			icon: 'reorder',
			component: Modules.Components.Form.Input
		}, {
			path: 'textarea',
			name: '文本框',
			icon: 'edit',
			component: Modules.Components.Form.Textarea
		}, {
			path: 'checkbox',
			name: 'checkbox',
			icon: 'edit',
			component: Modules.Components.Form.Checkbox
		}, {
			path: 'radio',
			name: 'Radio单选',
			icon: 'edit',
			component: Modules.Components.Form.Radio
		}, {
			path: 'select',
			name: '下拉框',
			icon: 'edit',
			component: Modules.Components.Form.Select
		}, {
			path: 'switch',
			name: '开关',
			icon: 'edit',
			component: Modules.Components.Form.Switch
		}, {
			path: 'cascader',
			name: '级联选择器',
			icon: 'edit',
			component: Modules.Components.Form.Cascader
		}, {
			path: 'date',
			name: '日期',
			icon: 'edit',
			component: Modules.Components.Form.Date
		}, {
			path: 'time',
			name: '时间',
			icon: 'edit',
			component: Modules.Components.Form.Time
		}, {
			path: 'datetime',
			name: '日期时间',
			icon: 'edit',
			component: Modules.Components.Form.DateTime
		}]
	}, {
		path: 'list',
		name: '列表组件',
		icon: 'inbox',
		component: Content,
		redirect: '/components/list/default',
		children: [{
			path: 'default',
			name: '默认渲染列表',
			icon: 'reorder',
			component: Modules.Components.List.List
		},/* {
			path: 'pagination',
			name: '分页',
			icon: 'edit',
			component: Modules.Components.List.Pagination
		}, {
			path: 'search',
			name: '搜索',
			icon: 'edit',
			component: Modules.Components.List.Search
		}, {
			path: 'default-btn',
			name: '默认按钮',
			icon: 'edit',
			component: Modules.Components.List.DefaultBtn
		}, {
			path: 'custom-btn',
			name: '自定义按钮',
			icon: 'edit',
			component: Modules.Components.List.CustomBtn
		}*/]
	}]
}];
