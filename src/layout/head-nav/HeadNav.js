export default {
	name   : 'head-nav',
	data () {
		return {
			dialog: {
				show_access: false,
				show_set   : false,
				show_pass  : false,
				title      : '修改密码',
				user_info  : this.$store.state.user.userinfo,

				set_info: {
					login_style         : '',
					disabled_update_pass: [],
					select_users        : []
				},

				user_info_rules: {
					old_password    : [{
						required: true,
						message : '旧密码不能为空！',
						trigger : 'blur'
					}],
					password        : [{
						required: true,
						message : '新密码不能为空！',
						trigger : 'blur'
					}, {
						trigger  : 'blur',
						validator: (rule, value, callback) => {
							if (value === '') {
								callback(new Error('请再次输入密码'));
							} else {
								if ('' !== this.dialog.user_info.password) {
									this.$refs.user_info.validateField('password_confirm');
								}
								callback();
							}
						}
					}],
					password_confirm: [{
						required: true,
						message : '确认密码不能为空！',
						trigger : 'blur'
					}, {
						trigger  : 'blur',
						validator: (rule, value, callback) => {
							if (value === '') {
								callback(new Error('请再次输入密码'));
							} else if (value !== this.dialog.user_info.password) {
								callback(new Error('两次输入密码不一致!'));
							} else {
								callback();
							}
						}
					}],
				},
			}
		}
	},
	mounted () {

	},
	methods: {
		/**
		 * 退出登录
		 */
		logout () {
			this.$confirm('你确定退出登录么?', '确认退出', {
				confirmButtonText: '确定',
				cancelButtonText : '取消',
				type             : 'warning'
			}).then(() => {
				this.$store.dispatch('update_login_refresh', {
					type: true
				});
				this.$store.dispatch('remove_user_routes');
				this.$store.dispatch('remove_userinfo').then(() => {
					this.$router.push('/login');
				});
			});
		},

		/**
		 * 弹出框-修改密码或者系统设置
		 * @param {string} cmditem 弹框类型
		 */
		setDialogInfo (cmditem) {
			if (!cmditem) {
				console.log('test');
				this.$message('菜单选项缺少command属性');
				return;
			}
			switch (cmditem) {
				case 'pass':
					this.dialog.show_pass = true;
					this.dialog.title     = '修改密码';
					break;
				case 'set':
					this.onGetSetting();
					this.dialog.show_set = true;
					this.dialog.title    = '系统设置';
					break;
				case 'logout':
					this.logout();
					break;
			}
		},

		/**
		 * 修改密码
		 * @param  {object} userinfo 当前修改密码的表单信息
		 */
		updUserPass (userinfo) {
			this.$refs[userinfo].validate((valid) => {
				if (valid) {
					this.$$api_user_updatePass({
						data: {
							old_password    : this.dialog[userinfo].old_password,
							password        : this.dialog[userinfo].password,
							password_confirm: this.dialog[userinfo].password_confirm
						},
						fn  : data => {
							this.dialog.show_pass = false;
							this.$message.success('修改成功！');
						}
					});
				}
			});
		},

		/**
		 * 获取系统设置信息
		 */
		onGetSetting () {

		},

		/**
		 * 修改系统设置信息
		 */
		onUpdateSetting () {

		}
	}
}