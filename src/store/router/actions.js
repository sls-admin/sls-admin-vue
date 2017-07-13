import * as types from './mutations_types';

module.exports = {
    set_cur_route: ({
        commit
    }, paths) => {
        commit(types.SET_CUR_ROUTE, paths);
    }
};