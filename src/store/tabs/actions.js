/**
 * Created by sailengsi on 2017/5/10.
 */

import * as types from './mutations_types.js'

export default {
  update_tabs: ({
                  commit
                }, {
                  route
                }) => {
    return new Promise((resolve, reject) => {
      commit(types.UPDATE_TABS, {
        route
      })
      resolve()
    })
  },

  remove_tabs: ({
                  commit
                }, {
                  path
                }) => {
    return new Promise((resolve, reject) => {
      commit(types.REMOVE_TABS, {
        path
      })
      resolve()
    })
  }
}
