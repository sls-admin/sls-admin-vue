/**
 * Created by sailengsi on 2017/5/11.
 */

import { Home } from 'layout/'

import open from './open'

export default {
  path: '/function',
  name: '静态演示',
  icon: 'inbox',
  component: Home,
  redirect: '/function/open',
  children: [open]
}
