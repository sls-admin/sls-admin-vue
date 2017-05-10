var path            = require('path')
var utils           = require('./utils')
var config          = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry  : {
		app: './src/main.js'
	},
	output : {
		path      : config.build.assetsRoot,
		filename  : '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias     : {
			'vue$'      : 'vue/dist/vue.esm.js',
			'@'         : resolve('src'),
			'assets'   : resolve('src/assets'),
			'cps'   : resolve('src/components'),
			'views'   : resolve('src/views'),
			'layout'   : resolve('src/layout'),
			'config'   : resolve('src/config'),
			'utils'   : resolve('src/utils'),
			'store'   : resolve('src/store'),
			'directives'   : resolve('src/directives'),
			'filters'   : resolve('src/filters'),
			'mixins'   : resolve('src/mixins'),
			'plugins'   : resolve('src/plugins'),
			'register'   : resolve('src/register'),
			'libs'   : resolve('src/libs'),
			'apis'   : resolve('src/apis'),
			'router'   : resolve('src/router'),
		}
	},
	module : {
		rules: [
			{
				test   : /\.vue$/,
				loader : 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test   : /\.js$/,
				loader : 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test   : /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader : 'url-loader',
				options: {
					limit: 10000,
					name : utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test   : /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader : 'url-loader',
				options: {
					limit: 10000,
					name : utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	}
}
