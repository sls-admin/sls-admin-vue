/**
 * Created by sailengsi on 2017/5/11.
 */


import article from './article';

export default {
	path          : '/adv',
	name          : '高级实战',
	icon          : 'inbox',
	component_name: 'Home',
	component_path: 'Adv',
	redirect      : '/adv/article',
	children      : [article]
};