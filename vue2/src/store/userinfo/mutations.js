import * as types from './mutations_types'

import {
    store
} from '../../util/';

module.exports = {
    [types.UPDATE_USERINFO](state, user_db) {
        state.userinfo = user_db.userinfo || {};
        store.set('userinfo', state.userinfo);
    },

    [types.REMOVE_USERINFO](state) {
        store.remove('userinfo');
        state.userinfo = {};
    },
};