/**
 * Created by sailengsi on 2017/5/11.
 */

import { Content } from 'layout/'

import { Permissions } from 'views/'

export default {
    path: 'user',
    name: '用户管理',
    icon: 'inbox',
    component: Content,
    redirect: '/permissions/user/list',
    children: [{
        path: 'list',
        name: '用户列表',
        icon: 'reorder',
        component: Permissions.User.List
    }, {
        path: 'edit',
        name: '编辑用户',
        icon: 'edit',
        component: Permissions.User.Edit
    }]
}
