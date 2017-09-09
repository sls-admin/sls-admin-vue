/**
 * Created by sailengsi on 2017/5/11.
 */
import Container from '../../views/container/';

import Components from '../../views/page/components/';

export default {
	path          : 'form',
	name          : '表单组件',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Form',
	component     : Container.Content,
	redirect      : '/components/form/input',
	children      : [{
		path          : 'input',
		name          : 'input框',
		icon          : 'reorder',
		component_name: 'Input',
		component     : Components.Form.Input
	}, {
		path          : 'textarea',
		name          : '文本框',
		icon          : 'edit',
		component_name: 'Textarea',
		component     : Components.Form.Textarea
	}, {
		path          : 'checkbox',
		name          : 'checkbox',
		icon          : 'edit',
		component_name: 'Checkbox',
		component     : Components.Form.Checkbox
	}, {
		path          : 'radio',
		name          : 'Radio单选',
		icon          : 'edit',
		component_name: 'Radio',
		component     : Components.Form.Radio
	}, {
		path          : 'select',
		name          : '下拉框',
		icon          : 'edit',
		component_name: 'Select',
		component     : Components.Form.Select
	}, {
		path          : 'switch',
		name          : '开关',
		icon          : 'edit',
		component_name: 'Switch',
		component     : Components.Form.Switch
	}, {
		path          : 'cascader',
		name          : '级联选择器',
		icon          : 'edit',
		component_name: 'Cascader',
		component     : Components.Form.Cascader
	}, {
		path          : 'date',
		name          : '日期',
		icon          : 'edit',
		component_name: 'Date',
		component     : Components.Form.Date
	}, {
		path          : 'time',
		name          : '时间',
		icon          : 'edit',
		component_name: 'Time',
		component     : Components.Form.Time
	}, {
		path          : 'datetime',
		name          : '日期时间',
		icon          : 'edit',
		component_name: 'DateTime',
		component     : Components.Form.DateTime
	}, {
		path          : 'editor',
		name          : '富文本',
		icon          : 'edit',
		component_name: 'Editor',
		component     : Components.Form.Editor
	}, {
		path          : 'validate',
		name          : '验证',
		icon          : 'edit',
		component_name: 'Validate',
		component     : Components.Form.Validate
	}]
};