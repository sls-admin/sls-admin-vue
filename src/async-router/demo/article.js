/**
 * Created by sailengsi on 2017/5/11.
 */


export default {
	path          : 'article',
	name          : '文章管理',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Article',
	redirect      : '/demo/article/list',
	children      : [{
		path          : 'list',
		name          : '文章列表',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'edit',
		name          : '编辑文章',
		icon          : 'edit',
		component_name: 'Edit',
	}]
};