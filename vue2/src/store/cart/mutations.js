import * as types from './mutations_types'

export default {
    [types.CLEAR_LOCAL](state) {
        state.cartList.forEach(function(item) {
            item.num = 0;
        });
        state.cartList = [];
        localStorage.removeItem('vuex_cart');
    },
    [types.UPDATE_LOCAL](state) {
        localStorage.setItem('vuex_cart', JSON.stringify(state.cartList));
    },
    [types.UPDATE_CUR_SHOP_STATUS](state, {
        index = -1
    }) {
        state.curIndex = index;
    },
    [types.DELETE_DB](state) {
        if (state.curIndex >= 0) {
            state.cartList[state.curIndex].num = 0;
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CREATE_DB](state, shop) {
        // console.log('mu create');

        state.cartList.push(shop);
    },
    [types.ADD_DB](state) {
        // console.log('mu add id:' + state.curIndex);

        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
        state.cartList[state.curIndex].num++;
    },
    [types.REDUCE_DB](state) {
        // console.log('mu reduce');

        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
        state.cartList[state.curIndex].num--;

        // console.log(state.cartList[state.curIndex].num);
        if (state.cartList[state.curIndex].num == 0) {
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CHECK_DB](state, {
        id
    }) {
        // console.log('mu check id :' + id);
        // console.log(state.cartList);

        state.curIndex = -1;

        var list = state.cartList;
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    state.curIndex = i;
                    break;
                }
            }
        }
    }
};