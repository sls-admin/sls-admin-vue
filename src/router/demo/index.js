/**
 * Created by sailengsi on 2017/5/11.
 */

import {Home,Content} from 'layout/';

import article from './article.js';
// import user from './user.js';
import order from './order.js';
import orderstatis from './order-statis.js';

export default {
	path: '/demo',
	name: '完整交互',
	icon: 'inbox',
	component: Home,
	redirect: '/demo/article',
	children:[article,order,orderstatis]
};