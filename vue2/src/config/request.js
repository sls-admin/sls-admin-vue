/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
module.exports = {
	//用户模块
	user: require('./request/user.js'),

	/**
	 * 文章管理
	 * @type {Object}
	 */
	article: require('./request/article.js'),


	/**
	 * 订单管理
	 * @type {Object}
	 */
	order: require('./request/order.js'),

	/**
	 * 系统设置
	 * @type {Object}
	 */
	system: require('./request/system.js'),

	/**
	 * 第三方接入
	 * @type {Object}
	 */
	open: require('./request/open.js')
};