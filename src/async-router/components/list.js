/**
 * Created by sailengsi on 2017/5/11.
 */


export default {
	path          : 'list',
	name          : '列表组件',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'List',
	redirect      : '/components/list/default',
	children      : [{
		path          : 'default',
		name          : '默认列表',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'datatype',
		name          : '数据类型',
		icon          : 'reorder',
		component_name: 'DataType',
	}, {
		path          : 'filter',
		name          : '过滤筛选',
		icon          : 'reorder',
		component_name: 'Filter',
	}, {
		path          : 'formatter',
		name          : '格式化',
		icon          : 'reorder',
		component_name: 'Formatter',
	}, {
		path          : 'pagination',
		name          : '分页功能',
		icon          : 'edit',
		component_name: 'Pagination',
	}, {
		path          : 'search',
		name          : '搜索功能',
		icon          : 'edit',
		component_name: 'Search',
	}, {
		path          : 'expand',
		name          : '折叠功能',
		icon          : 'edit',
		component_name: 'Expand',
	}, {
		path          : 'custom-btn',
		name          : '按钮功能',
		icon          : 'edit',
		component_name: 'customBtn',
	}]
};