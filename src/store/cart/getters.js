export default {
    getInfos(state) {
        state.cartInfos.total_price = 0;
        state.cartInfos.total_nums = 0;
        var list = state.cartList;
        for (var i = 0; i < list.length; i++) {
            var price = parseInt(list[i].price),
                num = parseInt(list[i].num);

            state.cartInfos.total_price += price * num;
            state.cartInfos.total_nums += num;
        }
        return state.cartInfos;
    },
    getCartList(state) {
        return state.cartList;
    }
};