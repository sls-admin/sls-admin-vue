import _ from 'underscore';
import {methods} from 'mixins/';

// console.log(_.functions(methods));


export default {
	methods:mergeManyObjToOneObj(methods)
};

/**
 * 递归提取一个对象中的所有函数
 * @param  {object} obj 对象
 * @return {object}     所有函数都将被包装到这个对象中
 */
function mergeManyObjToOneObj(obj) {
	var newObj = {};
	if (obj && typeof obj === 'object') {
		for (var f in obj) {
			if (typeof obj[f] === 'function') {
				newObj[f] = obj[f];
			}
			if (typeof obj[f] === 'object') {
				Object.assign(newObj, mergeManyObjToOneObj(obj[f]));
			}
		}
	}
	return newObj;
}