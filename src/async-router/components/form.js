/**
 * Created by sailengsi on 2017/5/11.
 */

export default {
	path          : 'form',
	name          : '表单组件',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Form',
	redirect      : '/components/form/input',
	children      : [{
		path          : 'input',
		name          : 'input框',
		icon          : 'reorder',
		component_name: 'Input',
	}, {
		path          : 'textarea',
		name          : '文本框',
		icon          : 'edit',
		component_name: 'Textarea',
	}, {
		path          : 'checkbox',
		name          : 'checkbox',
		icon          : 'edit',
		component_name: 'Checkbox',
	}, {
		path          : 'radio',
		name          : 'Radio单选',
		icon          : 'edit',
		component_name: 'Radio',
	}, {
		path          : 'select',
		name          : '下拉框',
		icon          : 'edit',
		component_name: 'Select',
	}, {
		path          : 'switch',
		name          : '开关',
		icon          : 'edit',
		component_name: 'Switch',
	}, {
		path          : 'cascader',
		name          : '级联选择器',
		icon          : 'edit',
		component_name: 'Cascader',
	}, {
		path          : 'date',
		name          : '日期',
		icon          : 'edit',
		component_name: 'Date',
	}, {
		path          : 'time',
		name          : '时间',
		icon          : 'edit',
		component_name: 'Time',
	}, {
		path          : 'datetime',
		name          : '日期时间',
		icon          : 'edit',
		component_name: 'DateTime',
	}, {
		path          : 'editor',
		name          : '富文本',
		icon          : 'edit',
		component_name: 'Editor',
	}, {
		path          : 'validate',
		name          : '验证',
		icon          : 'edit',
		component_name: 'Validate',
	}]
};