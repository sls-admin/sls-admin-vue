/**
 * Created by sailengsi on 2017/5/11.
 */

import {Home} from 'layout/'

import user from './user'
import tag from './tag'
import router from './router'

export default {
    path: '/permissions',
    name: '权限设计',
    icon: 'inbox',
    component: Home,
    redirect: '/permissions/user',
    children: [user, tag, router]
}
