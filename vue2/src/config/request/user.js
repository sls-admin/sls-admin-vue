/**
 * Created by sailengsi on 2017/4/30.
 */

/**
 * 用户模块
 * @type {Object}
 */
module.exports = {
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
	 * @param    {object}    data            参数
	 * @param    {string}    data.username    用户名-搜索
	 * @param    {string}    data.email        邮箱-搜索
	 * @param    {Function}    fn            成功回的回调
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
};