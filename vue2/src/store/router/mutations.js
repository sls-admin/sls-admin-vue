import * as types from './mutations_types'

module.exports = {
    [types.SET_CUR_ROUTE](state, paths) {
        // console.log(paths);
        state.headerCurRouter = paths.rootPath;
        state.leftCurRouter = paths.fullPath;
    }
};