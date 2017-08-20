/**
 * Created by sailengsi on 2017/5/10.
 */
import {
	store
} from 'utils/';


import * as types from './mutations_types'


export default {
	/**
	 * 更新用户信息
	 * @param state
	 * @param user_db	用户信息
	 */
	[types.UPDATE_USERINFO](state, user_db) {
		state.userinfo = user_db.userinfo || {};
		store.set('userinfo', state.userinfo);
	},


	/**
	 * 移除用户信息
	 * @param state
	 */
	[types.REMOVE_USERINFO](state) {
		store.remove('userinfo');
		state.userinfo = {};
	},


	/**
	 * 更新是否记住密码
	 * @param state
	 * @param user_db 用户信息
	 */
	[types.UPDATE_REMUMBER](state, user_db) {
		state.remumber.remumber_flag = user_db.remumber_flag;
		state.remumber.remumber_login_info = user_db.remumber_login_info;

		store.set('remumber_flag', state.remumber.remumber_flag);
		store.set('remumber_login_info', state.remumber.remumber_login_info);
	},


	/**
	 * 移除记住密码功能
	 * @param state
	 */
	[types.REMOVE_REMUMBER](state) {
		store.remove('remumber_flag');
		store.remove('remumber_login_info');

		state.remumber.remumber_flag = false;
		state.remumber.remumber_login_info = {
			username: '',
			token: ''
		};
	},


	/**
	 * 更新用户拥有的路由信息
	 * @param state
	 * @param user_routes	用户拥有的路由信息
	 */
	[types.UPDATE_USER_ROUTES](state,{routes}){
		state.user_routes=routes;
		store.set('user_routes',state.user_routes);
	},


	/**
	 * 移除用户拥有的路由信息
	 * @param state
	 * @param user_routes	用户拥有的路由信息
	 */
	[types.REMOVE_USER_ROUTES](state){
		state.user_routes=[];
		store.remove('user_routes');
	}
};