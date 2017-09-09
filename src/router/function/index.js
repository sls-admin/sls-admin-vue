/**
 * Created by sailengsi on 2017/5/11.
 */

import Container from '../../views/container/';

import open from './open';

export default {
	path          : '/function',
	name          : '静态演示',
	icon          : 'inbox',
	component     : Container.Home,
	component_name: 'Home',
	component_path: 'Function',
	redirect      : '/function/open',
	children      : [open]
};