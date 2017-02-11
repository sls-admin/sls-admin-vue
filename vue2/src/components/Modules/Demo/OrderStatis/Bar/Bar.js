import {
    Default as Statis
} from 'common/Echarts/Bar/';

import {
    order
} from 'config/request.js';

module.exports = {
    name: 'echarts',
    components: {
        Statis
    },
    data() {
        return {
            echarts_data: {
                title: '订单柱状图统计',
                subtext: '这是您所有的订单状态信息',
                hover_title: '订单量',
                text_list: ["待支付", "待配送", "待收货", "已完成", "已取消", "退单"],
                value_list: [0, 0, 0, 0, 0, 0]
            }
        }
    },
    methods: {
        onUpdateStatis() {
            this.setTitle().getStatis();
        },
        setTitle() {
            this.echarts_data.title = 'update title';

            return this;
        },
        getStatis() {
            order.statisOrder.call(this, {}, (data) => {
                for (var f in data.statis) {
                    this.$set(this.echarts_data.value_list, f - 1, data.statis[f]);
                }

                // this.echarts_data.value_list = data.statis;
            })
        }
    },
    mounted: function() {

    }
}