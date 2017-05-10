import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)

import Home from '../layout/Routeview/Home.vue';
import Modules from '../views/';

// console.log('router.js');
// console.log(Home);
// console.log(Modules);

var routes = [{
	path    : '/',
	redirect: to => {
		return 'login';
	},
	hidden  : true
}, {
	path     : '/login',
	component: Modules.Home,
	hidden   : true
}, {
	path     : '/404',
	component: Modules.NotFound,
	hidden   : true
}]
	// .concat(require('./router/function.js'))
	// .concat(require('./router/demo.js'))
	// .concat(require('./router/components.js'))
	// .concat(require('./router/adv.js'))
	


var router= new Router({
	routes
});


router.beforeEach((to, from, next) => {

	window.scroll(0, 0);

	/*var userinfo = store.state.user.userinfo;

	if (!userinfo.token && to.path !== '/login') {
		store.dispatch('remove_userinfo');
		next('/login');
	} else {

		//判断是否开启权限
		if (userinfo.access_status === 1) {
			var web_routers = typeof userinfo.web_routers === 'object' ? userinfo.web_routers : {};

			//判断当前用户是否拥有目标页面访问权限，防止用户强制在地址栏输入访问没有权限的页面
			if (!web_routers[to.path]) {
				ElementUI.MessageBox.alert('您没用权限访问此页面！', '访问错误', {
					confirmButtonText: '确定',
					cancelButtonText : '取消',
					type             : 'warning'
				}).then(() => {
					if (userinfo.default_web_routers) {
						next(userinfo.default_web_routers);
					} else {
						store.dispatch('remove_userinfo');
						next('/login');
					}
				});
			} else {
				NProgress.start();
				next();
			}
		} else {

			if (userinfo.token && to.path === '/login') {
				next({
					path: '/demo/user/list'
				});
			} else {
				NProgress.start();
				next();
			}
		}

	}*/
})

router.afterEach(transition => {
	NProgress.done();
});


export default router;
