/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

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
		component: resolve=>{
			require(['views/adv/article/list/'], resolve);
		}
	}, {
		path: 'edit',
		name: 'article-edit',
		icon: 'edit',
		component: resolve=>{
			require(['views/adv/article/edit/'], resolve);
		}
	}]
};