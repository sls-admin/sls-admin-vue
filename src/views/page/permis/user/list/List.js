export default {
	name      : 'adv-user-list',
	components: {},
	data () {
		return {
			params: {
				pid: ''
			},
			list  : [],
			fields: [{
				key  : 'id',
				label: '文章ID'
			}, {
				key  : 'create_time',
				label: '创建时间'
			}, {
				key  : 'username',
				label: '用户名'
			}, {
				key  : 'email',
				label: '邮箱'
			}, {
				width          : '160',
				key            : 'status',
				label          : '状态',
				formatter      : function(item) {
					return item.status == 1 ? '启用' : '禁用';
				},
				filter_list    : [{
					text : '启用',
					value: 1
				}, {
					text : '禁用',
					value: 2

				}],
				filter_method  : function(value, item) {
					return item.status == value;
				},
				filter_multiple: false,
			}],

			//需要给分页组件传的信息
			paginations: {
				current_page: 1,
				total       : 0,
				page_size   : 9,
				page_sizes  : [3, 9, 12, 24],
				layout      : "total, sizes, prev, pager, next, jumper"
			},

			//搜索配置
			search_data: {
				fields       : [{
					key : 'username',
					desc: '用户名'
				}, {
					key : 'email',
					desc: '邮箱'
				}],
				default_value: {
					username: '',
					email   : ''
				}
			},

			//按钮配置
			btn_info: {
				batch       : false,
				batch_delete: false,
				update      : false,
				width       : 400,
				add_text    : '添加用户',
				select_text : '查看子用户',
				update_text : '修改',
				delete_text : '删除用户',

				list: [{
					text: '添加子用户',
					fn  : ({data}) => {
						console.log(data);
						this.$router.push({
							path : '/permis/user/edit',
							query: {
								id: data.id
							}
						});
					}
				}]
			}

		}
	},
	methods   : {
		/**
		 * 获取用户列表
		 */
		onGetList () {
			let data = {
				page     : this.paginations.current_page,
				page_size: this.paginations.page_size,
				username : this.search_data.default_value.username,
				email    : this.search_data.default_value.email,
			};

			if (this.params.pid) {
				data.pid = this.params.pid;
			}

			this.$$api_user_selectUser({
				data: data,
				fn  : data => {
					console.log(data);
					this.paginations.total = data.list.total;
					this.list              = data.list.data;
				}
			});
		},


		/**
		 * 点击删除按钮
		 */
		onClickBtnDelete ({data}) {
			this.$confirm('删除后不可恢复', '确认删除？').then(() => {
				this.$$api_user_deleteUser({
					data: {
						id: data.id
					},
					fn  : () => {
						this.$router.go(0);
					}
				});
			});
		},


		/**
		 * 添加用户
		 */
		onClickBtnAdd () {
			this.$router.push('/permis/user/edit');
		},


		/**
		 * 查看子用户
		 * @param data
		 */
		onClickBtnSelect ({data}) {
			console.log(data);
			this.$router.push({
				path : '/permis/user/list',
				query: {
					pid: data.id
				}
			});
		},


		/**
		 * 改变页码事件
		 * @param current_page    当前页码
		 */
		onChangeCurPage (current_page) {
			var path           = this.$route.path,
				query          = Object.assign({}, this.$route.query);
			query.current_page = current_page;
			this.$router.push({
				path,
				query
			});
		},


		/**
		 * 改变每页显示数量事件
		 * @param page_size    每页显示的数量
		 */
		onChangePageSize (page_size) {
			var path        = this.$route.path,
				query       = Object.assign({}, this.$route.query);
			query.page_size = page_size;
			this.$router.push({
				path,
				query
			});
		},


		/**
		 * 更新参数
		 */
		onUpdateParams () {
			if (this.$route.query.current_page) {
				this.paginations.current_page = parseInt(this.$route.query.current_page);
			}
			if (this.$route.query.page_size) {
				this.paginations.page_size = parseInt(this.$route.query.page_size);
			}

			this.search_data.default_value.username = this.$route.query.username;
			this.search_data.default_value.email    = this.$route.query.email;
			this.params.pid                         = this.$route.query.pid;
		},


		/**
		 * 搜索事件
		 * @param data    表单数据
		 * @param info    其他有用的数据
		 */
		onSearch ({data, info}) {
			console.log(data);
			console.log(info);

			var path  = this.$route.path,
				query = Object.assign({}, this.$route.query, data);

			this.$router.push({
				path,
				query
			});
		},



		/**
		 * 初始化
		 */
		init () {
			this.onUpdateParams();
			this.onGetList();
		}
	},
	mounted () {
		this.init();
	},
	watch     : {
		$route (to, from) {
			this.init();
		}
	}

}