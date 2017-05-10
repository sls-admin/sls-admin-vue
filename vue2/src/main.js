import Vue from 'vue';

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);


//页面顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


// root component
import App from './App';

//vuex store
// import store from './store/';
// console.log(store);


import router from './config/router.js';

// import 'register/';
// import 'mixin/';




const appAdmin = new Vue({
	el    : '#app',
	data() {
		return {};
	},
	// store,
	router,
	template: '<App/>',
  	components: { App },
	render: h => h(App)
})