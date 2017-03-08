import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// 导入封装的回调函数
import {
	cbs,
	gbs
} from 'config/settings.js';

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.host;

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要
 */
module.exports = function(type, url, data, fn, tokenFlag, errFn) {

	// 分发显示加载样式任务
	this.$store.dispatch('show_loading');

	if (tokenFlag !== true) {
		data.token = this.$store.state.user.userinfo.token;
	}

	if (type === 'get') {
		let datas = {
			params: data
		};
	} else {
		let datas = data;
	}

	Vue.axios[type](url, datas).then((res) => {
		if (res.data.status === 200) {
			console.dir(res.data);
			fn(res.data);
		} else {

			// 调用全局配置错误回调
			cbs.statusError.call(this, res.data);

			if (tokenFlag === true) {
				errFn && errFn.call(this);
			}
		}
		this.$store.dispatch('hide_loading');
	}).catch((err) => {

		//调用全局配置错误回调
		// console.log(err);

		this.$store.dispatch('hide_loading');
		cbs.requestError.call(this, err);

		errFn && errFn.call(this);
	});

};