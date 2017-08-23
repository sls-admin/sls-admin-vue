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
		this.setDialogInfo('set');
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
					'children'      : [
						{
							'path'          : 'open',
							'name'          : '公共内容',
							'icon'          : 'inbox',
							'component_path': 'Open',
							'component'     : 'Content',
							'redirect'      : '/function/open/echarts',
							'value'         : false,
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
					'redirect'      : '/demo/article',
					'value'         : false,
					'children'      : [
						{
							'path'          : 'article',
							'name'          : '文章管理',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/demo/article/list',
							'value'         : false,
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
					'redirect'      : '/adv/article',
					'value'         : false,
					'children'      : [
						{
							'path'          : 'article',
							'name'          : 'article-manager',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/adv/article/list',
							'value'         : false,
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
									'name'     : 'article-edit',
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


		/**
		 * 全选全不选根级和二级路由状态时，同时改变子级路由的状态
		 * @param arr    索引数组[one_route_index] or [one_route_index,two_index]
		 * @param type
		 */
		setChildStatus (arr, type) {
			if (Array.isArray(arr)) {
				var root_index = arr[0],
					two_index  = arr[1];

				if (root_index >= 0) {
					var routes = this.routes[root_index].children;

					if (two_index >= 0) {
						routes = routes[two_index].children;
					}
				} else {
					var routes = this.routes;
				}

				routes.forEach(item => {
					item.value = type;
					if (item.children && Array.isArray(item.children) && item.children.length) {
						item.children.forEach(iitem => {
							iitem.value = type;
							if (iitem.children && Array.isArray(iitem.children) && iitem.children.length) {
								iitem.children.forEach(iiitem => {
									iiitem.value = type;
								});
							}
						});
					}
				});
				// console.log(routes);
				this.setParentStatus();
			} else {
				console.error('参数arr必须是一个数组');
			}
		},
		/**
		 * 当  当前级的路由全部选中时，要把父级全部选中，然后以此类推，一直到最上层。
		 */
		setParentStatus () {
			var all = true;
			this.routes.forEach(root_route => {
				if (!root_route.value) {
					all = false;
				}
				var one = true;
				root_route.children.forEach(two_route => {
					if (!two_route.value) {
						one = false;
						all = false;
					}
					var two = true;
					two_route.children.forEach(three_route => {
						if (!three_route.value) {
							two = false;
							one = false;
							all = false;
						}
					});
					console.log('two:' + two);
					two_route.value = two;
					if (two) {
						one = true;
					}
				});
				console.log('one:' + one);
				root_route.value = one;
				if (one) {
					all = true;
				}
			});
			console.log('all:' + all);
			this.routes_all = all;
		},
		/**
		 * 改变全部事件
		 */
		onChangeAllRoute () {
			this.setChildStatus([], this.routes_all);
		},
		/**
		 * 改变根路由事件
		 */
		onChangeRootRoute (root_index) {
			this.setChildStatus([root_index], this.routes[root_index].value);
		},
		/**
		 * 改变二级路由事件
		 * @param event
		 */
		onChangeTwoRoute (two_index, root_index) {
			this.setChildStatus([root_index, two_index], this.routes[root_index].children[two_index].value);
		},
		/**
		 * 改变三级路由事件
		 * @param value
		 */
		onChangeThreeRoute () {
			this.setParentStatus();
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