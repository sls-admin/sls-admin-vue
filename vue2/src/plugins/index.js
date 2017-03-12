import Vue from 'vue';


/**
 * 导入需要注册的对象
 */
import {
	plugins
} from 'register/';


/**
 * 注册到Vue对象中
 */
Vue.use({
	install(Vue, options) {

		/**
		 * 递归把需要用到的方法以插件形式注册到Vue上
		 * @param  {object} target 注册目标对象，即Vue
		 * @param  {object} source 需要注册的对象
		 */
		var deepRegister = function(target, source) {
			for (var k in source) {
				if (typeof source[k] === 'object') {
					deepRegister(target, source[k]);
				} else {
					target.prototype['$$' + k] = source[k];
				}
			}
		}

		deepRegister(Vue, plugins);
	}
});