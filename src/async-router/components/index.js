/**
 * Created by sailengsi on 2017/5/11.
 */
import form from './form.js';
import list from './list.js';

export default {
	path          : '/components',
	name          : '组件封装',
	icon          : 'inbox',
	component_path: 'Components',
	component_name: 'Home',
	redirect      : '/components/form',
	children      : [form, list]
};