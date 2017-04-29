/**
 * Created by sailengsi on 2017/4/30.
 */
import {
	Home,
	Content,
	Modules
} from '../../components/';

module.exports = [{
	path: '/demo',
	name: '真实交互',
	icon: 'inbox',
	component: Home,
	redirect: '/demo/user',
	children: [{
		path: 'user',
		name: '用户管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/user/list',
		children: [{
			path: 'list',
			name: '用户列表',
			icon: 'reorder',
			component: Modules.Demo.User.List
		}, {
			path: 'edit',
			name: '编辑用户',
			icon: 'edit',
			component: Modules.Demo.User.Edit
		}]
	}, {
		path: 'article',
		name: '文章管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/article/list',
		children: [{
			path: 'list',
			name: '文章列表',
			icon: 'reorder',
			component: Modules.Demo.Article.List
		}, {
			path: 'edit',
			name: '编辑文章',
			icon: 'edit',
			component: Modules.Demo.Article.Edit
		}]
	}, {
		path: 'order',
		name: '订单管理',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/order/list',
		children: [{
			path: 'list',
			name: '订单列表',
			icon: 'reorder',
			component: Modules.Demo.Order.List
		}, {
			path: 'edit',
			name: '编辑订单',
			icon: 'edit',
			component: Modules.Demo.Order.Edit
		}]
	}, {
		path: 'orderstatis',
		name: '订单统计',
		icon: 'inbox',
		component: Content,
		redirect: '/demo/orderstatis/bar',
		children: [{
			path: 'bar',
			name: '柱状图',
			icon: 'reorder',
			component: Modules.Demo.OrderStatis.Bar
		}, {
			path: 'pie',
			name: '饼状图',
			icon: 'edit',
			component: Modules.Demo.OrderStatis.Pie
		}]
	}]
}];