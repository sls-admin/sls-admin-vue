var env = process.env;

var settings = {
	gbs: {
		// host: '//slsadmin.api.' + (env.NODE_ENV === 'development' ? 'sls' : 'sailengsi') + '.com',
		host: '/slsAdminApi',
		db_prefix: 'sls_admin_',
	},

	cbs: {
		statusError(err) {
			if (err.status !== 404) {
				this.$message({
					showClose: true,
					message: '返回错误：' + err.msg,
					type: 'error'
				});
			} else {
				this.$store.dispatch('remove_userinfo').then(() => {
					this.$alert(err.status + ',' + err.msg + '！', '登录错误', {
						confirmButtonText: '确定',
						callback: action => {
							this.$router.push('/login');
						}
					});
				});
			}
		},

		requestError(err) {
			this.$message({
				showClose: true,
				message: '请求错误：' + err.response.status + ',' + err.response.statusText,
				type: 'error'
			});
		}
	}
};


module.exports = settings;