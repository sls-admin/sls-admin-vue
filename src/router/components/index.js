/**
 * Created by sailengsi on 2017/5/11.
 */
import {Home,Content} from 'layout/';

import form from './form.js';
import list from './list.js';

export default {
	path: '/components',
	name: '组件封装',
	icon: 'inbox',
	component: Home,
	redirect: '/components/form',
	children:[form,list]
};