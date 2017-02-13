import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//导入封装的回调函数
import {
	cbs,
	gbs
} from './settings.js';


//动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.host;


var ajax = function(type, url, data, fn, tokenFlag) {
	if (!tokenFlag) {
		data.token = this.$store.state.user.userinfo.token;
	}
	if (type === 'get') {
		var datas = {
			params: data
		};
	} else {
		var datas = data;
	}

	Vue.axios[type](url, datas).then((res) => {
		if (res.data.status === 200) {
			fn(res.data.data);
		} else {
			//调用全局配置错误回调

			cbs.statusError.call(this, res.data);
		}
	}).catch((err) => {
		// console.log(err);
		//调用全局配置错误回调

		cbs.requestError.call(this, err);
	});
};


/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要需用的接口
 * @type {Object}
 */
module.exports = {
	user: {
		login(data, fn) {
			ajax.call(this, 'post', '/Login/login', data, fn, true);
		},
		getList(data, fn) {
			ajax.call(this, 'get', '/User/selectUser', data, fn);
		},
		saveUser(data, fn) {
			ajax.call(this, 'post', '/User/saveUser', data, fn);
		},

		deleteUser(data, fn) {
			ajax.call(this, 'post', '/User/deleteUser', data, fn);
		},
		editUser(id, fn) {
			ajax.call(this, 'get', '/User/deleteUser', {
				id: id
			}, fn);
		},
		selectUser(id, fn) {
			ajax.call(this, 'get', '/User/getUserInfo', {
				id: id
			}, fn);
		},
		updPass(data, fn) {
			ajax.call(this, 'post', '/User/updatePass', data, fn);
		},
		accessUser(data, fn) {
			ajax.call(this, 'post', '/User/accessUser', data, fn);
		}
	},

	article: {
		selectArticle(data, fn) {
			ajax.call(this, 'get', '/Article/selectArticle', data, fn);
		},
		saveArticle(data, fn) {
			ajax.call(this, 'post', '/Article/saveArticle', data, fn);
		},
		deleteArticle(data, fn) {
			ajax.call(this, 'post', '/Article/deleteArticle', data, fn);
		},
		findArticle(data, fn) {
			ajax.call(this, 'get', '/Article/findArticle', data, fn);
		},
	},
	order: {
		statisOrder(data, fn) {
			ajax.call(this, 'get', '/Order/statisOrder', data, fn);
		},
		selectOrder(data, fn) {
			ajax.call(this, 'get', '/Order/selectOrder', data, fn);
		},
		saveOrder(data, fn) {
			ajax.call(this, 'post', '/Order/saveOrder', data, fn);
		},
	},
	system: {
		getSetting(fn) {
			ajax.call(this, 'get', '/System/getSetting', {}, fn);
		},
		updateSetting(data, fn) {
			ajax.call(this, 'post', '/System/updateSetting', data, fn);
		}
	}
};