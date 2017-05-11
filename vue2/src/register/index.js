/**
 * Created by sailengsi on 2017/5/11.
 */
import Vue from 'vue';
import {string} from 'utils/';
import libs from './lib.js';
import cps from './component.js';
import apis from './api.js';


for(var cp in cps){
	var cp_name=string.humpToLowercase(cp);
	Vue.component(cp_name,cps[cp]);
}


// console.log(apis);
// console.log(libs);
// console.log(cps);


/**
 * 把一些全局对象和一些全局方法，注册到Vue原型上
 */
Vue.use({
	install(Vue, options) {
		
		//注册全局对象，如jQuery等。
		for(var lib in libs){
			Vue.prototype[lib] = libs[lib];
		}

		
		deepRegister(Vue, apis);
	}
});


/**
 * 递归把需要用到的方法以插件形式注册到Vue上
 * @param  {object} target 注册目标对象，即Vue
 * @param  {object} source 需要注册的方法，此参数必须是一个对象，不限深度级别，只会提取函数注册
 */
function deepRegister(target, source){
	for (var k in source) {
		if (typeof source[k] === 'object') {
			deepRegister(target, source[k]);
		} else {
			target.prototype['$$' + k] = source[k];
		}
	}
}
