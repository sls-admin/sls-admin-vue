/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 第三方接入
 * @type {Object}
 */
module.exports = {


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
};