/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

export default {
	path: 'form',
	name: '表单组件',
	icon: 'inbox',
	component: resolve=>{
		require(['views/components/form/Form.vue'], resolve);
	},
	redirect: '/components/form/input',
	children: [{
		path: 'input',
		name: 'input框',
		icon: 'reorder',
		component: resolve=>{
			require(['views/components/form/input/'], resolve);
		}
	}, {
		path: 'textarea',
		name: '文本框',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/textarea/'], resolve);
		}
	}, {
		path: 'checkbox',
		name: 'checkbox',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/checkbox/'], resolve);
		}
	}, {
		path: 'radio',
		name: 'Radio单选',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/radio/'], resolve);
		}
	}, {
		path: 'select',
		name: '下拉框',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/select/'], resolve);
		}
	}, {
		path: 'switch',
		name: '开关',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/switch/'], resolve);
		}
	}, {
		path: 'cascader',
		name: '级联选择器',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/cascader/'], resolve);
		}
	}, {
		path: 'date',
		name: '日期',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/date/'], resolve);
		}
	}, {
		path: 'time',
		name: '时间',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/time/'], resolve);
		}
	}, {
		path: 'datetime',
		name: '日期时间',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/date-time/'], resolve);
		}
	}, {
		path: 'editor',
		name: '富文本',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/editor/'], resolve);
		}
	}, {
		path: 'validate',
		name: '验证',
		icon: 'edit',
		component: resolve=>{
			require(['views/components/form/validate/'], resolve);
		}
	}]
};