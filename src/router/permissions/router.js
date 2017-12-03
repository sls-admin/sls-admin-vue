/**
 * Created by sailengsi on 2017/5/11.
 */

import { Content } from 'layout/'

import { Permissions } from 'views/'

export default {
    path: 'router',
    name: '路由管理',
    icon: 'inbox',
    component: Content,
    redirect: '/permissions/router/list',
    children: [{
        path: 'list',
        name: '路由列表',
        icon: 'reorder',
        component: Permissions.Router.List
    }, {
        path: 'edit',
        name: '编辑路由',
        icon: 'edit',
        component: Permissions.Router.Edit
    }]
}
