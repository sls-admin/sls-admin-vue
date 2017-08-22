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


				activeNames: ['/function', '/demo'],
				routes     : [],
			},


			checkAll       : true,
			checkedCities  : [],
			cities         : [{
				value: 'sh',
				label: '上海'
			}, {
				label: '北京',
				value: 'bj'
			}, {
				label: '广州',
				value: 'gz'
			}, {
				label: '深圳',
				value: 'sz'
			}],
			isIndeterminate: true
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
			this.dialog.routes = [
				{
					'path'          : '/function',
					'name'          : '静态演示',
					'icon'          : 'inbox',
					'component_path': 'Function',
					'component'     : 'Home',
					'redirect'      : '/function/open',
					'children'      : [
						{
							'path'          : 'open',
							'name'          : '公共内容',
							'icon'          : 'inbox',
							'component_path': 'Open',
							'component'     : 'Content',
							'redirect'      : '/function/open/echarts',
							'children'      : [
								{
									'path'     : 'echarts',
									'name'     : '图表',
									'icon'     : 'bar-chart',
									'component': 'Echarts'
								},
								{
									'path'     : 'list',
									'name'     : '列表',
									'icon'     : 'reorder',
									'component': 'List'
								},
								{
									'path'     : 'form',
									'name'     : '表单',
									'icon'     : 'edit',
									'component': 'Form'
								},
								{
									'path'     : 'vuex',
									'name'     : 'vuex',
									'icon'     : 'window-restore',
									'component': 'Vuex'
								},
								{
									'path'     : 'test404',
									'name'     : '测试404',
									'icon'     : 'window-restore',
									'component': 'Test404'
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
					'children'      : [
						{
							'path'          : 'article',
							'name'          : '文章管理',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/demo/article/list',
							'children'      : [
								{
									'path'     : 'list',
									'name'     : '文章列表',
									'icon'     : 'inbox',
									'component': 'List'
								},
								{
									'path'     : 'edit',
									'name'     : '编辑文章',
									'icon'     : 'edit',
									'component': 'Form'
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
							'children'      : [
								{
									'path'     : 'list',
									'name'     : '订单列表',
									'icon'     : 'inbox',
									'component': 'List'
								},
								{
									'path'     : 'edit',
									'name'     : '添加订单',
									'icon'     : 'edit',
									'component': 'Form'
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
					'children'      : [
						{
							'path'          : 'article',
							'name'          : 'article-manager',
							'icon'          : 'inbox',
							'component_path': 'Article',
							'component'     : 'Content',
							'redirect'      : '/adv/article/list',
							'children'      : [
								{
									'path'     : 'list',
									'name'     : 'artcile-list',
									'icon'     : 'inbox',
									'component': 'List'
								},
								{
									'path'     : 'edit',
									'name'     : 'article-edit',
									'icon'     : 'edit',
									'component': 'Form'
								}
							]
						}
					]
				}
			];
		},


		/**
		 * 改变根路由事件
		 * 当折叠面板展开，即代表当前下面的所有的选中，或者当前下面的任何一个选中，这个也得选中
		 */
		onChangeRootPath () {
			console.log(this.dialog.activeNames);
		},
		/**
		 * 改变二级路由事件
		 * @param event
		 */
		onChangeTwoPath (event) {
			this.checkedCities   = event.target.checked ? ['sh', 'bj', 'gz', 'sz'] : [];
			this.isIndeterminate = false;
		},
		/**
		 * 改变三级路由事件
		 * @param value
		 */
		onChangeThreePath (value) {
			let checkedCount     = value.length;
			this.checkAll        = checkedCount === this.cities.length;
			this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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