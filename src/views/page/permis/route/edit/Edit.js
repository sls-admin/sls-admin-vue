import {
	gbs
} from 'config/';

export default {
	name      : 'permis-router-edit',
	components: {},
	data () {
		return {
			params       : {
				pname : '根',
				p_path: '0,',
				pid   : 0,
				level : 1,
				id    : '',
			},
			fields       : [{
				key  : 'name',
				desc : '请输入路由名称',
				label: '路由名称'
			}, {
				key  : 'path',
				desc : '请输入路由路径',
				label: '路由路径',
			}, {
				key  : 'component',
				desc : '请输入路由组件名称',
				label: '组件名称'
			}, {
				key  : 'redirect',
				desc : '请输入重定向子路由地址',
				label: '重定向地址'
			}, {
				key  : 'alias',
				desc : '请输入路由别名',
				label: '路由别名'
			}, {
				key  : 'icon_class',
				desc : '请输入图标类名',
				label: '图标类名'
			}, {
				key  : 'sort',
				desc : '默认为0，默认查询方式从小到大',
				label: '序号'
			}, {
				key  : 'status',
				type : 'switch',
				value: {
					on : '启用',
					off: '禁用'
				},
				desc : '',
				label: '状态'
			}],
			default_value: {
				name      : '',
				path      : '',
				alias     : '',
				icon_class: '',
				component : '',
				redirect  : '',
				sort      : 0,
				status    : true,
			},
			rules        : {
				name     : [{
					required: true,
					message : '请输入路由名称',
					trigger : 'blur'
				}],
				path     : [{
					required: true,
					message : '请选择路由路径',
					trigger : 'blur'
				}],
				component: [{
					required: true,
					message : '请输入组件名称',
					trigger : 'blur'
				}]
			}
		}
	},
	methods   : {
		onSubmit ({data, info}) {
			if (this.params.id) {
				data.id = this.params.id;
			} else {
				data.level  = this.params.level;
				data.pid    = this.params.pid;
				data.p_path = this.params.p_path;
			}

			this.$$api_webrouter_saveRouter({
				data,
				fn: () => {
					this.$router.push('/permis/route/list');
				}
			});
		},


		onGetView () {
			this.$$api_webrouter_findRouter({
				data: {
					id: this.params.id
				},
				fn  : ({router_info, parent_router_info}) => {
					console.dir(router_info);

					this.default_value.name       = router_info.name;
					this.default_value.path       = router_info.path;
					this.default_value.component  = router_info.component;
					this.default_value.redirect   = router_info.redirect;
					this.default_value.soft       = router_info.sort;
					this.default_value.alias      = router_info.alias;
					this.default_value.icon_class = router_info.icon_class;
					this.default_value.status     = router_info.status === 1 ? true : false;

					if (router_info.pid > 0) {
						this.params.pname = parent_router_info.name;
					}
				}
			});
		},


		onUpdateParams () {
			this.params.id     = this.$route.query.id || '';
			this.params.pname  = this.$route.query.pname || '根';
			this.params.p_path = this.$route.query.p_path || '0,';
			this.params.pid    = parseInt(this.$route.query.pid) || 0;
			this.params.level  = parseInt(this.$route.query.level) || 1;

			if (this.params.level === 1) {
				this.default_value.component = 'Home';
			}
			if (this.params.level === 2) {
				this.default_value.component = 'Content';
			}
		},


		init () {
			this.onUpdateParams();

			if (this.params.id) {
				this.onGetView();
			}
		}
	},
	created () {
		this.init();
	},
	mounted () {

	},
	watch     : {
		default_value: {
			deep: true,
			handler (v) {
				this.default_value = v;
			}
		},
		watch        : {
			$route () {
				this.init();
			}
		}
	}
}