export default {
    //购物车列表
    cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cart')) : [],

    //当前购物车信息
    cartInfos: {
        total_price: 0,
        total_nums: 0
    },

    //当前菜品是否在购物车的状态。在则是对应的索引，不在则是-1
    curIndex: -1
};