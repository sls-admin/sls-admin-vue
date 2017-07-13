import * as types from './mutations_types'

import {
    store
} from '../../util/';

module.exports = {
    [types.SHOW_LOADING](state) {
        state.ajax_loading = true;
    },

    [types.HIDE_LOADING](state) {
        state.ajax_loading = false;
    }
};