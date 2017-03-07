import {
	ajax
} from 'util/';

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
	//用户模块
	user: {
		/**
		 * 登录
		 * @param {object} data 参数
		 * @param {string} data.username 登陆用户名
		 * @param {string} data.password 登陆密码
		 * @param {function} fn 成功回调
		 */
		login(data, fn, errFn) {
			ajax.call(this, 'post', '/Login/login', data, fn, true, errFn);
		},

		/**
		 * 获取用户列表
		 * @param  	{object}   	data 			参数
		 * @param 	{string} 	data.username 	用户名-搜索
		 * @param 	{string} 	data.email 		邮箱-搜索
		 * @param  	{Function} 	fn   			成功回的回调
		 */
		selectUser(data, fn) {
			ajax.call(this, 'get', '/User/selectUser', data, fn);
		},

		/**
		 * 添加修改用户公用接口
		 * @param {object}   data 参数
		 * @param {string} data.id 用户ID-修改时必须
		 * @param {string} data.username 用户名
		 * @param {string} data.email 邮箱
		 * @param {string} data.sex 性别
		 * @param {string} data.birthday 生日
		 * @param {string} data.address 住址
		 * @param {string} data.status 状态
		 * @param {function} fn   成功回调
		 */
		saveUser(data, fn) {
			ajax.call(this, 'post', '/User/saveUser', data, fn);
		},

		/**
		 * 删除用户
		 * @param  {object}   data 参数
		 * @param {string} data.id 需要删除的用户ID，批量删除时，值为以逗号分开的ID字符串
		 * @param  {Function} fn   成功回调
		 */
		deleteUser(data, fn) {
			ajax.call(this, 'post', '/User/deleteUser', data, fn);
		},

		/**
		 * 获取用户信息
		 * @param  {string}   id 用户ID
		 * @param  {Function} fn 成功回调
		 */
		findUser(id, fn) {
			ajax.call(this, 'get', '/User/findUser', {
				id: id
			}, fn);
		},


		/**
		 * 修改密码
		 * @param  {object}   data 参数
		 * @param {string} data.old_password 旧密码
		 * @param {string} data.password 新密码
		 * @param {string} data.password_confirm 确认密码
		 * @param  {Function} fn   成功回调
		 */
		updPass(data, fn) {
			ajax.call(this, 'post', '/User/updatePass', data, fn);
		},

		/**
		 * 设置权限
		 * @param  {object}   data 参数
		 * @param {string} data.id 数据ID
		 * @param {string} data.login_style 登录方式，1：单点登录；2：多点登录
		 * @param {string} data.disabled_update_pass 不允许修改密码的用户ID，以逗号隔开
		 * @param  {Function} fn   成功回调
		 */
		accessUser(data, fn) {
			ajax.call(this, 'post', '/User/accessUser', data, fn);
		}
	},

	/**
	 * 文章管理
	 * @type {Object}
	 */
	article: {
		/**
		 * 查看用户列表
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		selectArticle(data, fn) {
			ajax.call(this, 'get', '/Article/selectArticle', data, fn);
		},

		/**
		 * 添加修改公用接口
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveArticle(data, fn) {
			ajax.call(this, 'post', '/Article/saveArticle', data, fn);
		},

		/**
		 * 删除文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		deleteArticle(data, fn) {
			ajax.call(this, 'post', '/Article/deleteArticle', data, fn);
		},

		/**
		 * 获取文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		findArticle(data, fn) {
			ajax.call(this, 'get', '/Article/findArticle', data, fn);
		},
	},


	/**
	 * 订单管理
	 * @type {Object}
	 */
	order: {
		/**
		 * 统计订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		statisOrder(data, fn) {
			ajax.call(this, 'get', '/Order/statisOrder', data, fn);
		},

		/**
		 * 获取订单列表
		 * @param  {object}   data 获取订单列表
		 * @param  {Function} fn   成功回调
		 */
		selectOrder(data, fn) {
			ajax.call(this, 'get', '/Order/selectOrder', data, fn);
		},

		/**
		 * 添加订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveOrder(data, fn) {
			ajax.call(this, 'post', '/Order/saveOrder', data, fn);
		},
	},

	/**
	 * 系统设置
	 * @type {Object}
	 */
	system: {
		/**
		 * 获取系统设置信息
		 * @param  {Function} fn 成功回调
		 */
		getSetting(fn) {
			ajax.call(this, 'get', '/System/getSetting', {}, fn);
		},

		/**
		 * 修改系统设置信息
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		updateSetting(data, fn) {
			ajax.call(this, 'post', '/System/updateSetting', data, fn);
		}
	}
};