/**
 * Created by sailengsi on 2017/5/11.
 */

import {Home,Content} from 'layout/';

import article from './article';


export default {
	path: '/adv',
	name: '高级实战',
	icon: 'inbox',
	component: Home,
	redirect: '/adv/article',
	children:[article]
};