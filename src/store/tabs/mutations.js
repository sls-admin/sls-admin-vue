/**
 * Created by sailengsi on 2017/5/10.
 */
import {
  store
} from 'utils/'

import * as types from './mutations_types'

export default {
  [types.UPDATE_TABS](state, {
    route
  }) {
    state.tabs_cur = route.path
    if (route.path !== '/login') {
      if (state.pathList.indexOf(route.path) === -1) {
        state.pathList.push(route.path)
        state.list.push({
          name: route.name,
          path: route.path,
          params: route.params,
          query: route.query,
          hash: route.hash
        })
        // console.log('更新tabs route', route)
        // console.log('更新tabs state.list', state.list)
        store.set('tabs_list', state.list)
        store.set('tabs_path_list', state.pathList)
      }
    }
  },

  [types.REMOVE_TABS](state, {
    path
  }) {
    var index = state.pathList.indexOf(path);
    if (index === -1) {
      console.error('没有在缓存的tabs中找到path：', path);
    }else{
      state.pathList.splice(index, 1);
      state.list.splice(index, 1);
      store.set('tabs_list', state.list)
      store.set('tabs_path_list', state.pathList)
    }
  }
}
