import {
	gbs
} from 'config/';

export default {
	name      : 'permis-route-async',
	components: {},
	data () {
		return {
			routes:[]
		}
	},
	methods   : {
		onAsyncRoute(){
			var routes=this.$router.options.routes;
			console.log(routes);
		},

		init () {
			this.onAsyncRoute();
		}
	},
	created () {
		this.init();
	},
	mounted () {

	},
	watch     : {
		$route () {
			this.init();
		}
	}
}