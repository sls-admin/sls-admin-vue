<template>
    <div id="app">
        <transition name="bounce">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
	import {Home,Content} from 'layout/';
	import {Function} from 'views/';
	var funs={
		path: '/function',
		name: '静态演示',
		icon: 'inbox',
		component: Home,
		redirect: '/function/open',
		children:[{
			path: 'open',
			name: '公共内容',
			icon: 'inbox',
			component: Content,
			redirect: '/function/open/echarts',
			children: [{
				path: 'echarts',
				name: '图表',
				icon: 'bar-chart',
				component: Function.Open.Echarts
			}, {
				path: 'list',
				name: '列表',
				icon: 'reorder',
				component: Function.Open.List
			}, {
				path: 'form',
				name: '表单',
				icon: 'edit',
				component: Function.Open.Form
			}, {
				path: 'vuex',
				name: 'Vuex',
				icon: 'window-restore',
				component: Function.Open.Vuex
			}, {
				path: 'test404',
				name: '测试404',
				icon: 'window-restore',
				component: Function.Open.Test404
			}]
		}]
	};

	export default {
		name      : 'app',
		components: {},
		data () {
			return {}
		},
		methods   : {
			/**
			 * 更新路由
			 */
			onUpdateRoutes () {

			},
			init () {
				this.onUpdateRoutes();
			},
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
</script>

<style lang="less">
    * {
        -webkit-box-sizing : border-box;
        -moz-box-sizing    : border-box;
        box-sizing         : border-box;
        margin             : 0px;
        padding            : 0px;
    }

    .bounce-enter-active {
        animation         : bounce-in .5s;
        -webkit-animation : bounce-in .5s;
    }

    .bounce-leave-active {
        animation         : bounce-out .2s;
        -webkit-animation : bounce-out .2s;
    }

    @keyframes bounce-in {
        0% {
            transform : scale(0);
        }
        50% {
            transform : scale(1.05);
        }
        100% {
            transform : scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform : scale(1);
        }
        50% {
            transform : scale(0.95);
        }
        100% {
            transform : scale(0);
        }
    }
</style>
