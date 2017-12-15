import {
	gbs
} from 'config/';

export default {
	name      : 'permis-user-edit',
	components: {},
	data () {
		return {
			parent: {
				username: '',
				id      : ''
			},

			fields       : [{
				key  : 'username',
				desc : '请输入用户名',
				label: '用户名'
			}, {
				key  : 'email',
				desc : '请输入邮箱',
				label: '邮箱'
			}],
			default_value: {
				username: '',
				email   : ''
			},
			rules        : {
				username: [{
					required: true,
					message : '请输入用户名',
					trigger : 'blur'
				}],
				email   : [{
					required: true,
					message : '请输入邮箱',
					trigger : 'blur'
				}]
			}
		}
	},
	methods   : {
		onSubmit ({data, info}) {
			data.pid = this.parent.id;
			this.$$api_user_saveUser({
				data,
				fn: () => {
					this.$router.push('/permis/user/list');
				}
			});
		}
	},
	created () {
		if (this.$route.query.id) {
			var data = {
				id: this.$route.query.id
			};
			this.$$api_user_findUser({
				data,
				fn: ({userinfo}) => {
					this.parent.username = userinfo.username;
					this.parent.id       = userinfo.id;
				}
			});
		} else {
			this.parent.username = this.$store.state.user.userinfo.username;
			this.parent.id       = this.$store.state.user.userinfo.id;
		}
	},
	mounted () {

	},
	watch     : {
		default_value: {
			deep: true,
			handler (v) {
				this.default_value = v;
			}
		}
	}
}