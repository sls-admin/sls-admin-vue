/**
 * Created by sailengsi on 2017/4/30.
 */

/**
 * 用户模块
 * @type {Object}
 */
export default [
    {
        name: '登录',
        method: 'login',
        path: '/login',
        type: 'post'
    },
    {
        name: '注册',
        method: 'register',
        path: '/register',
        type: 'post'
    },
	{
		name: '获取用户详情',
		method: 'userInfo',
		path: '/userInfo',
		type: 'get'
	},
    {
        name: '获取用户列表',
        method: 'selectUser',
        path: '/user',
        type: 'get'
    },
    {
        name: '添加用户',
        method: 'addUser',
        path: '/user',
        type: 'post'
    }
]
