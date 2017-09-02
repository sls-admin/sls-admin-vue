/**
 * Created by sailengsi on 2017/4/30.
 */
/**
 * web路由管理
 * @type {Object}
 */
export default [
	{
		name  : '添加/修改路由',
		method: 'saveRouter',
		path  : '/WebRouter/saveRouter',
		type  : 'post',
	},
	{
		name  : '查看路由列表',
		method: 'selectRouter',
		path  : '/WebRouter/selectRouter',
		type  : 'get',
	},
	{
		name  : '删除路由',
		method: 'deleteRouter',
		path  : '/WebRouter/deleteRouter',
		type  : 'post',
	},
	{
		name  : '查看路由详情',
		method: 'findRouter',
		path  : '/WebRouter/findRouter',
		type  : 'get',
	}
];