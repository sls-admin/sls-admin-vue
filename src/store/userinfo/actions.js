import * as types from './mutations_types';

module.exports = {
	update_userinfo: ({
		commit
	}, {
		userinfo
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_USERINFO, {
				userinfo
			});
			resolve()
		});
	},

	remove_userinfo: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_USERINFO);
			resolve()
		});
	},


	update_remumber: ({
		commit
	}, {
		remumber_flag,
		remumber_login_info
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.UPDATE_REMUMBER, {
				remumber_flag,
				remumber_login_info
			});
			resolve()
		});
	},

	remove_remumber: ({
		commit
	}) => {
		return new Promise((resolve, reject) => {
			commit(types.REMOVE_REMUMBER);
			resolve()
		});
	}
};