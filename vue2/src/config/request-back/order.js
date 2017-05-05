/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 订单管理
 * @type {Object}
 */
module.exports = {

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

};