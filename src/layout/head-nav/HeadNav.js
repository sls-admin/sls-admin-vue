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
			},

			routes    : [],
			routes_all: false,
		}
	},
	mounted () {
		// this.setDialogInfo('set');
		this.onInitRoutes();

		// this.onGetSetting();
	},
	methods: {
		/**
		 * 初始化组装路由
		 */
		onInitRoutes () {
			this.routes = [
				{
					'path'          : '/function',
					'name'          : '静态演示',
					'icon'          : 'inbox',
					'component_path': 'Function',
					'component'     : 'Home',
					'redirect'      : '/function/open',
					'value'         : false,
					'is_all'        : false,
					'children'      : [
						{
							'path'          : 'open',
							'name'          : '公共内容',
							'icon'          : 'inbox',
							'component_path': 'Open',
							'component'     : 'Content',
							'redirect'      : '/function/open/echarts',
							'value'         : false,
							'is_all'        : false,
							'children'      : [
								{
									'path'     : 'echarts',
									'name'     : '图表',
									'icon'     : 'bar-chart',
									'component': 'Echarts',
									'value'    : false,
								},
								{
									'path'     : 'list',
									'name'     : '列表',
									'icon'     : 'reorder',
									'component': 'List',
									'value'    : false,
								},
								{
									'path'     : 'form',
									'name'     : '表单',
									'icon'     : 'edit',
									'component': 'Form',
									'value'    : false,
								},
								{
									'path'     : 'vuex',
									'name'     : 'vuex',
									'icon'     : 'window-restore',
									'component': 'Vuex',
									'value'    : false,
								},
								{
									'path'     : 'test404',
									'name'     : '测试404',
									'icon'     : 'window-restore',
									'component': 'Test404',
									'value'    : false,
								}
							]
						}
					]
				},


				{
					'path'          : '/demo',
					'name'          : '演示模块',
					'icon'          : 'inbox',
					'component_path': 'Demo',
					'component'     : 'Home',
					'redirect'      : '/demo/user',
					'value'         : false,
					'is_all'        : false,
					'children'      : [
						{
							'path'          : 'user',
							'name'          : '文章管理',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/demo/user/list',
							'value'         : false,
							'is_all'        : false,
							'children'      : [
								{
									'path'     : 'list',
									'name'     : '文章列表',
									'icon'     : 'inbox',
									'component': 'List',
									'value'    : false,
								},
								{
									'path'     : 'edit',
									'name'     : '编辑文章',
									'icon'     : 'edit',
									'component': 'Form',
									'value'    : false,
								}
							]
						},
						{
							'path'          : 'order',
							'name'          : '订单管理',
							'icon'          : 'inbox',
							'component_path': 'Order',
							'component'     : 'Content',
							'redirect'      : '/demo/order/list',
							'value'         : false,
							'is_all'        : false,
							'children'      : [
								{
									'path'     : 'list',
									'name'     : '订单列表',
									'icon'     : 'inbox',
									'component': 'List',
									'value'    : false,
								},
								{
									'path'     : 'edit',
									'name'     : '添加订单',
									'icon'     : 'edit',
									'component': 'Form',
									'value'    : false,
								}
							]
						}
					]
				},


				{
					'path'          : '/adv',
					'name'          : '高级实战',
					'icon'          : 'inbox',
					'component_path': 'Adv',
					'component'     : 'Home',
					'redirect'      : '/adv/user',
					'value'         : false,
					'is_all'        : false,
					'children'      : [
						{
							'path'          : 'user',
							'name'          : 'user-manager',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/adv/user/list',
							'value'         : false,
							'is_all'        : false,
							'children'      : [
								{
									'path'     : 'list',
									'name'     : 'artcile-list',
									'icon'     : 'inbox',
									'component': 'List',
									'value'    : false,
								},
								{
									'path'     : 'edit',
									'name'     : 'user-edit',
									'icon'     : 'edit',
									'component': 'Form',
									'value'    : false,
								}
							]
						}
					]
				}
			];
		},

		onChangeRoute ({root_index, two_index, three_index}) {
			if (three_index === undefined) {
				let routes = [];
				let status = false;
				if (two_index === undefined) {
					routes = this.routes[root_index].children;
					status = this.routes[root_index].value;
				} else {
					routes = this.routes[root_index].children[two_index].children;
					status = this.routes[root_index].children[two_index].value;
				}
				routes.forEach(route => {
					route.value = status;
					if (two_index == undefined) {
						route.children.forEach(page => {
							page.value = status;
						});
					}
				});
			}
			this.routes.forEach((root_route, root_index) => {
				if (root_route.children && Array.isArray(root_route.children)) {
					root_route.is_all = true;
					root_route.value  = true;
					root_route.children.forEach((two_route, two_index) => {
						if (two_route.children && Array.isArray(two_route.children)) {
							two_route.is_all = true;
							two_route.value  = true;
							two_route.children.forEach((three_route, three_index) => {
								if (!three_route.value) {
									two_route.is_all  = false;
									two_route.value   = false;
									root_route.is_all = false;
									root_route.value  = false;
								}
							});
							if (!two_route.value) {
								root_route.is_all = false;
								root_route.value  = false;
							}
						}
					});
				}
			});
		},
		/**
		 * 改变全部事件
		 */
		onChangeAllRoute () {

		},


		/**
		 * 退出登录
		 */
		logout () {
			this.$confirm('你确定退出登录么?', '确认退出', {
				confirmButtonText: '确定',
				cancelButtonText : '取消',
				type             : 'warning'
			}).then(() => {
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