/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 系统设置
 * @type {Object}
 */
module.exports = {

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

};