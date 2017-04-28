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
		login(data, fn, opts) {
			this.$$ajax('post', '/Login/login', data, fn, opts);
		},

		/**
		 * 获取用户列表
		 * @param  	{object}   	data 			参数
		 * @param 	{string} 	data.username 	用户名-搜索
		 * @param 	{string} 	data.email 		邮箱-搜索
		 * @param  	{Function} 	fn   			成功回的回调
		 */
		selectUser(data, fn, opts) {
			this.$$ajax('get', '/User/selectUser', data, fn, opts);
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
		saveUser(data, fn, opts) {
			this.$$ajax('post', '/User/saveUser', data, fn, opts);
		},

		/**
		 * 删除用户
		 * @param  {object}   data 参数
		 * @param {string} data.id 需要删除的用户ID，批量删除时，值为以逗号分开的ID字符串
		 * @param  {Function} fn   成功回调
		 */
		deleteUser(data, fn, opts) {
			this.$$ajax('post', '/User/deleteUser', data, fn, opts);
		},

		/**
		 * 获取用户信息
		 * @param  {string}   id 用户ID
		 * @param  {Function} fn 成功回调
		 */
		findUser(id, fn, opts) {
			this.$$ajax('get', '/User/findUser', {
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
		updPass(data, fn, opts) {
			this.$$ajax('post', '/User/updatePass', data, fn, opts);
		},

		/**
		 * 设置权限
		 * @param  {object}   data 参数
		 * @param {string} data.id 数据ID
		 * @param {string} data.login_style 登录方式，1：单点登录；2：多点登录
		 * @param {string} data.disabled_update_pass 不允许修改密码的用户ID，以逗号隔开
		 * @param  {Function} fn   成功回调
		 */
		accessUser(data, fn, opts) {
			this.$$ajax('post', '/User/accessUser', data, fn, opts);
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
		selectArticle(data, fn, opts) {
			this.$$ajax('get', '/Article/selectArticle', data, fn, opts);
		},

		/**
		 * 添加修改公用接口
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveArticle(data, fn, opts) {
			this.$$ajax('post', '/Article/saveArticle', data, fn, opts);
		},

		/**
		 * 删除文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		deleteArticle(data, fn, opts) {
			this.$$ajax('post', '/Article/deleteArticle', data, fn, opts);
		},

		/**
		 * 获取文章
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		findArticle(data, fn, opts) {
			this.$$ajax('get', '/Article/findArticle', data, fn, opts);
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
		statisOrder(data, fn, opts) {
			this.$$ajax('get', '/Order/statisOrder', data, fn, opts);
		},

		/**
		 * 获取订单列表
		 * @param  {object}   data 获取订单列表
		 * @param  {Function} fn   成功回调
		 */
		selectOrder(data, fn, opts) {
			this.$$ajax('get', '/Order/selectOrder', data, fn, opts);
		},

		/**
		 * 添加订单
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		saveOrder(data, fn, opts) {
			this.$$ajax('post', '/Order/saveOrder', data, fn, opts);
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
		getSetting(fn, opts) {
			this.$$ajax('get', '/System/getSetting', {}, fn);
		},

		/**
		 * 修改系统设置信息
		 * @param  {object}   data 参数
		 * @param  {Function} fn   成功回调
		 */
		updateSetting(data, fn, opts) {
			this.$$ajax('post', '/System/updateSetting', data, fn, opts);
		}
	},

	/**
	 * 第三方接入
	 * @type {Object}
	 */
	open: {

		/**
		 * 上传七牛图片
		 * @param data
		 * @param fn
		 */
		uploadQiniuFile(data, fn, opts) {
			this.$$ajax('post', '', data, fn, opts);
		},


		/**
		 * 获取七牛上传图片token
		 * @param  {Function} fn 成功回调
		 */
		getQiniuToken(fn, opts) {
			this.$$ajax('get', '/Open/getQiniuToken', {}, fn);
		},


		/**
		 * 获取七牛图片列表
		 * @param  {Function} fn 成功回调
		 */
		getQiniuFileList(data, fn, opts) {
			this.$$ajax('get', '/Open/getQiniuFileList', data, fn);
		},

		/**
		 * 删除七牛文件
		 * @param  {object}   data 参数
		 * @param  {Function} fn 成功回调
		 */
		deleteQiniuFile(data, fn, opts) {
			this.$$ajax('post', '/Open/deleteQiniuFile', data, fn, opts);
		}
	}
};