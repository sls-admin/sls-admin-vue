import {Home,NotFound} from '../layout/';

import Modules from '../views/';

module.exports = [{
	path    : '/',
	redirect: to => {
		return 'login';
	},
	hidden  : true
}, {
	path     : '/login',
	component: Modules.Login,
	hidden   : true
}, {
	path     : '/404',
	component: Home,
	hidden   : true,
	children : [{
		path     : '',
		component: Modules.NotFound
	}]
}]
	.concat(require('./router/function.js'))
	.concat(require('./router/demo.js'))
	.concat(require('./router/components.js'))
	.concat(require('./router/adv.js'))
