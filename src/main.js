import Vue from 'vue';

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.config.devtools      = false;

Vue.config.warnHandler = function (msg, vm, trace) {
	// `trace` 是组件的继承关系追踪
}


import router from 'router/';
import 'register/';
import store from 'store/';

import App from './App';

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
})
