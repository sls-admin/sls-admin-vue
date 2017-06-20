/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

import {Adv} from 'views/';

export default {
	path: 'article',
	name: 'article-manager',
	icon: 'inbox',
	component: Content,
	redirect: '/adv/article/list',
	children: [{
		path: 'list',
		name: 'article-list',
		icon: 'reorder',
		component: Adv.Article.List
	}, {
		path: 'edit',
		name: 'article-edit',
		icon: 'edit',
		component: Adv.Article.Edit
	}]
};