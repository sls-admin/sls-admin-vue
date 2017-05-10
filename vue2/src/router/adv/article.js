/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

import {Adv} from 'views/';

export default {
	path: 'article',
	name: '文章管理',
	icon: 'inbox',
	component: Content,
	redirect: '/adv/article/list',
	children: [{
		path: 'list',
		name: '文章列表',
		icon: 'reorder',
		component: Adv.Article.List
	}, {
		path: 'edit',
		name: '编辑文章',
		icon: 'edit',
		component: Adv.Article.Edit
	}]
};