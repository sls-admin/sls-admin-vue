import {
  store
} from 'utils/'

export default {
  // 当前已经打开的窗口列表
  list: store.get('tabs_list') || [],
  pathList: store.get('tabs_path_list') || [],

  // 活动窗口值，或者为路由path值，此值需要在APP组件根据当前路由实时更新
  tabs_cur: ''
}
