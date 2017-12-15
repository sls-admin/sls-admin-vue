/**
 * Created by sailengsi on 2017/6/20.
 */

import Vue from 'vue';

export default function() {
	Vue.directive('demo', {
		bind: function (el, binding, vnode) {
			var s = JSON.stringify;

			console.log(el);

			// el.innerHTML =
			// 	'name: '       + s(binding.name) + '<br>' +
			// 	'value: '      + s(binding.value) + '<br>' +
			// 	'expression: ' + s(binding.expression) + '<br>' +
			// 	'argument: '   + s(binding.arg) + '<br>' +
			// 	'modifiers: '  + s(binding.modifiers) + '<br>' +
			// 	'vnode keys: ' + Object.keys(vnode).join(', ')
		}
	})
}