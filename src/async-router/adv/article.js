/**
 * Created by sailengsi on 2017/5/11.
 */


export default {
	path          : 'article',
	name          : 'article-manager',
	icon          : 'inbox',
	component_name: 'Content',
	component_path: 'Article',
	redirect      : '/adv/article/list',
	children      : [{
		path          : 'list',
		name          : 'article-list',
		icon          : 'reorder',
		component_name: 'List',
	}, {
		path          : 'edit',
		name          : 'article-edit',
		icon          : 'edit',
		component_name: 'Edit',
	}]
};