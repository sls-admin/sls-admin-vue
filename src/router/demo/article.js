/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from '../../views/container/';

import Demo from '../../views/page/demo/';

export default {
	path     : 'article',
	name     : '文章管理',
	icon     : 'inbox',
	component: Container.Content,
	redirect : '/demo/article/list',
	children : [{
		path     : 'list',
		name     : '文章列表',
		icon     : 'reorder',
		component: Demo.Article.List
	}, {
		path     : 'edit',
		name     : '编辑文章',
		icon     : 'edit',
		component: Demo.Article.Edit
	}]
};