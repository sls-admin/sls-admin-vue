/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from 'views/container/';

import user from './user';
import route from './route';

export default {
	path     : '/permis',
	name     : '权限管理',
	icon     : 'inbox',
	component: Container.Home,
	redirect : '/permis/user',
	children : [user, route]
};