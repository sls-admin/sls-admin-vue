/**
 * Created by sailengsi on 2017/5/11.
 */

import {Content} from 'layout/';

import {Adv} from 'views/';

export default {
	path: 'open',
	name: '第三方接入',
	icon: 'inbox',
	component: Content,
	redirect: '/adv/open/qiniu',
	children: [{
		path: 'qiniu',
		name: '七牛',
		icon: 'reorder',
		component: Adv.Open.Qiniu
	}]
};