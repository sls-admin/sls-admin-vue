/**
 * Created by sailengsi on 2017/5/11.
 */

import { Content } from 'layout/'

import { Permissions } from 'views/'

export default {
    path: 'tag',
    name: '标签管理',
    icon: 'inbox',
    component: Content,
    redirect: '/permissions/tag/list',
    children: [{
        path: 'list',
        name: '标签列表',
        icon: 'reorder',
        component: Permissions.Tag.List
    }, {
        path: 'edit',
        name: '编辑标签',
        icon: 'edit',
        component: Permissions.Tag.Edit
    }]
}
