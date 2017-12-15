export default {
	name      : 'adv-user-list',
	components: {},
	data () {
		return {
			list  : [],
			fields: [{
				key  : 'id',
				label: '路由ID'
			}, {
				key  : 'pid',
				label: '路由PID'
			}, {
				key  : 'level',
				label: '路由等级'
			}, {
				key  : 'name',
				label: '路由名称'
			}, {
				key  : 'path',
				label: '路由路径'
			}, {
				key  : 'component',
				label: '组件名称'
			}, {
				width    : '160',
				key      : 'status',
				label    : '状态',
				formatter: function(item) {
					return item.status == 1 ? '启用' : '禁用';
				}
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
					key  : 'title',
					label: '标题'
				}],
				default_value: {
					title: ''
				}
			},

			//按钮配置
			btn_info: {
				batch       : false,
				batch_delete: false,
				select      : false,
				width       : 300,
				add_text    : '添加',
				update_text : '修改',
				delete_text : '删除',
				list        : [{
					text: '添加子路由',
					fn  : ({data}) => {
						console.log(data);
						this.$router.push({
							path : '/permis/route/edit',
							query: {
								pid   : data.id,
								pname : data.name,
								p_path: data.p_path + data.id + ',',
								level : parseInt(data.level) + 1,
							}
						});
					}
				}]
			}
		}
	},
	methods   : {
		/**
		 * 获取路由列表
		 */
		onGetList () {
			this.$$api_webrouter_selectRouter({
				data: {},
				fn  : ({list}) => {
					console.log(list);
					this.list = list;
				}
			});
		},


		/**
		 * 点击删除按钮
		 */
		onClickBtnDelete (opts) {
			this.$confirm('删除后不可恢复', '确认删除？').then(() => {
				this.$$api_webrouter_deleteRouter({
					data: {
						id: opts.data.id
					},
					fn  : () => {
						this.onGetList();
					}
				});
			});
		},


		/**
		 * 添加路由
		 */
		onClickBtnAdd () {
			this.$router.push('/permis/route/edit');
		},


		/**
		 * 修改按钮
		 * @param opts
		 */
		onClickBtnUpdate ({data}) {
			this.$router.push({
				path : '/permis/route/edit',
				query: {
					id    : data.id
				}
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

			this.search_data.default_value.title = this.$route.query.title;
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