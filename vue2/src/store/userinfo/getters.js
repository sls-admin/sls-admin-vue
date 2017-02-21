module.exports = {
	getUserinfo(state) {
		return state.userinfo;
	},

	getToken(state) {
		return state.userinfo && state.userinfo.token ? state.userinfo.token : '';
	},

	getRemumber(state){
		return state.remumber;
	}
};