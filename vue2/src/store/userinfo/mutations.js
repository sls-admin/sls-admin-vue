import * as types from './mutations_types'

import {
	store
} from '../../util/';

module.exports = {
	[types.UPDATE_USERINFO](state, user_db) {
		state.userinfo = user_db.userinfo || {};
		store.set('userinfo', state.userinfo);
	},

	[types.REMOVE_USERINFO](state) {
		store.remove('userinfo');
		state.userinfo = {};
	},

	[types.UPDATE_REMUMBER](state, user_db) {
		state.remumber.remumber_flag = user_db.remumber_flag;
		state.remumber.remumber_login_info = user_db.remumber_login_info;

		store.set('remumber_flag', state.remumber.remumber_flag);
		store.set('remumber_login_info', state.remumber.remumber_login_info);
	},


	[types.REMOVE_REMUMBER](state) {
		store.remove('remumber_flag');
		store.remove('remumber_login_info');

		state.remumber.remumber_flag = false;
		state.remumber.remumber_login_info = {
			username: '',
			token: ''
		};
	},
};