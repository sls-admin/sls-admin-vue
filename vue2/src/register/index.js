/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue';

import {string} from 'utils/';

import cps from 'cps/register.js';
for(var cp in cps){
	var cp_name=string.humpToLowercase(cp);
	Vue.component(cp_name,cps[cp]);
}

/**
 * 导入需要注册的对象
 */
// import {
// 	plugins
// } from 'plugins/';

import $ from 'jquery';

/**
 * 注册到Vue对象中
 */
Vue.use({
	install(Vue, options) {

		Vue.prototype.$ = $;

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

		// deepRegister(Vue, plugins);
	}
});
