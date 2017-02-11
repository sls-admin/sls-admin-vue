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



/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要需用的接口
 * @type {Object}
 */
module.exports = {
	user: {
		login(data, fn) {
			Vue.axios.post('/Login/login', data).then((res) => {
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
		},
		getList(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/User/selectUser', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},

		saveUser(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/User/saveUser', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},

		deleteUser(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/User/deleteUser', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		editUser(id, fn) {
			Vue.axios.get('/User/editUser', {
				params: {
					token: this.$store.state.user.userinfo.token,
					id: id
				}
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		selectUser(id, fn) {
			Vue.axios.get('/User/getUserInfo', {
				params: {
					token: this.$store.state.user.userinfo.token,
					id: id
				}
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		updPass(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/User/updatePass', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		accessUser(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/User/accessUser', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		}
	},

	article: {
		selectArticle(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/Article/selectArticle', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		saveArticle(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/Article/saveArticle', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		deleteArticle(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/Article/deleteArticle', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		findArticle(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/Article/findArticle', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
	},
	order: {
		statisOrder(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/Order/statisOrder', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		selectOrder(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/Order/selectOrder', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		saveOrder(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/Order/saveOrder', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
	},
	system: {
		getSetting(fn) {
			var data = {};
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.get('/System/getSetting', {
				params: data
			}).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		},
		updateSetting(data, fn) {
			data.token = this.$store.state.user.userinfo.token;
			Vue.axios.post('/System/updateSetting', data).then((res) => {
				if (res.data.status === 200) {
					fn(res.data.data);
				} else {
					cbs.statusError.call(this, res.data);
				}
			}).catch((err) => {
				cbs.requestError.call(this, err);
			});
		}
	}
};