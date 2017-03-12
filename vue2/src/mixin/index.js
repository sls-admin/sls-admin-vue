import Vue from 'vue';

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

//导入自定义的全局混合
var mixins = {
	methods: mergeManyObjToOneObj(require('./Methods/'))
};

//注册全局混合
Vue.mixin(mixins);