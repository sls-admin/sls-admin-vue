/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

import {Components} from 'views/';

export default {
	path: 'form',
	name: '表单组件',
	icon: 'inbox',
	component: Components.Form.Form,
	redirect: '/components/form/input',
	children: [{
		path: 'input',
		name: 'input框',
		icon: 'reorder',
		component: Components.Form.Input
	}, {
		path: 'textarea',
		name: '文本框',
		icon: 'edit',
		component: Components.Form.Textarea
	}, {
		path: 'checkbox',
		name: 'checkbox',
		icon: 'edit',
		component: Components.Form.Checkbox
	}, {
		path: 'radio',
		name: 'Radio单选',
		icon: 'edit',
		component: Components.Form.Radio
	}, {
		path: 'select',
		name: '下拉框',
		icon: 'edit',
		component: Components.Form.Select
	}, {
		path: 'switch',
		name: '开关',
		icon: 'edit',
		component: Components.Form.Switch
	}, {
		path: 'cascader',
		name: '级联选择器',
		icon: 'edit',
		component: Components.Form.Cascader
	}, {
		path: 'date',
		name: '日期',
		icon: 'edit',
		component: Components.Form.Date
	}, {
		path: 'time',
		name: '时间',
		icon: 'edit',
		component: Components.Form.Time
	}, {
		path: 'datetime',
		name: '日期时间',
		icon: 'edit',
		component: Components.Form.DateTime
	}, {
		path: 'editor',
		name: '富文本',
		icon: 'edit',
		component: Components.Form.Editor
	}, {
		path: 'validate',
		name: '验证',
		icon: 'edit',
		component: Components.Form.Validate
	}]
};