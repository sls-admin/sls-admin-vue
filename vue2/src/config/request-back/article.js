/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * 文章管理
 * @type {Object}
 */
module.exports = {
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
};