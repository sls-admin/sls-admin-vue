/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/adv',
	name: '高级实战',
	icon: 'inbox',
	component: Home,
	redirect: '/adv/article',
	children: [ {
		path: 'article',
		name: '文章管理',
		icon: 'inbox',
		component: Content,
		redirect: '/adv/article/list',
		children: [{
			path: 'list',
			name: '文章列表',
			icon: 'reorder',
			component: Modules.Adv.Article.List
		}, {
			path: 'edit',
			name: '编辑文章',
			icon: 'edit',
			component: Modules.Adv.Article.Edit
		}]
	}, /*{
		path: 'wangeditor',
		name: 'wangeditor富文本',
		icon: 'inbox',
		component: Content,
		redirect: '/adv/wangeditor/one',
		children: [{
			path: 'one',
			name: '单个',
			icon: 'reorder',
			component: Modules.Adv.Wangeditor.One
		}, {
			path: 'many',
			name: '多个',
			icon: 'edit',
			component: Modules.Adv.Wangeditor.Many
		}]
	},*/ {
		path: 'open',
		name: '第三方接入',
		icon: 'inbox',
		component: Content,
		redirect: '/adv/open/qiniu',
		children: [{
			path: 'qiniu',
			name: '七牛',
			icon: 'reorder',
			component: Modules.Adv.Open.Qiniu
		}]
	}]
}];
