import * as types from './mutations_types';


/*var actions = {};
var mts = Object.keys(types);
for (var i = 0; i < mts.length; i++) {
    var fun_name = mts[i].toLocaleLowerCase(),
        cmt_name = mts[i];

    // console.log(fun_name, cmt_name);

    actions[fun_name] = (function() {
        return function({
            commit
        }, arg) {
            console.log(types[cmt_name]);
            commit(types[cmt_name], arg);
            commit(types.UPDATE_LOCAL);
        }
    })();
}
console.log(actions);
export default actions;*/


export default {
    clear_local: ({
        commit
    }) => {
        commit(types.CLEAR_LOCAL);
    },
    update_local: ({
        commit
    }) => {
        commit(types.UPDATE_LOCAL);
    },
    update_cur_shop_status: ({
        commit
    }, obj) => {
        commit(types.UPDATE_CUR_SHOP_STATUS, obj);
    },
    delete_db: ({
        commit
    }) => {
        commit(types.DELETE_DB);
        commit(types.UPDATE_LOCAL);
    },
    create_db: ({
        commit
    }, {
        shop
    }) => {
        commit(types.CREATE_DB, shop);
        commit(types.UPDATE_LOCAL);
    },
    add_db: ({
        commit
    }) => {
        commit(types.ADD_DB);
        commit(types.UPDATE_LOCAL);
    },
    reduce_db: ({
        commit
    }) => {
        commit(types.REDUCE_DB);
        commit(types.UPDATE_LOCAL);
    },
    check_db: ({
        commit
    }, obj) => {
        commit(types.CHECK_DB, obj);
    }
};