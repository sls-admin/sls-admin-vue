/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

export default {
	path: 'user',
	name: '文章管理',
	icon: 'inbox',
	component: Content,
	redirect: '/demo/user/list',
	children: [{
		path: 'list',
		name: '文章列表',
		icon: 'reorder',
		component: resolve=>{
			require(['views/demo/user/list/'], resolve);
		}
	}, {
		path: 'edit',
		name: '编辑文章',
		icon: 'edit',
		component: resolve=>{
			require(['views/demo/user/edit/'], resolve);
		}
	}]
};