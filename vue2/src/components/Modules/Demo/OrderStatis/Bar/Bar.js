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
                id: 'orderBarDefault',
                title: '订单柱状图统计初始化标题',
                subtext: '初始化描述信息',
                hover_title: '订单量',
                text_list: ["待支付", "待配送", "待收货", "已完成", "已取消", "退单"],
                value_list: [0, 0, 0, 0, 0, 0]
            }
        }
    },
    methods: {
        onUpdateTitle() {
            this.echarts_data.title = '订单柱状图统计动态更新标题';
        },
        onUpdateSubtext() {
            this.echarts_data.subtext = '动态描述信息';
        },
        onUpdateValueList() {
            this.getStatis();
        },
        onUpdateTextList() {
            for (var i = 0; i < this.echarts_data.text_list.length; i++) {
                this.$set(this.echarts_data.text_list, i, this.echarts_data.text_list[i] + '!');
            }
        },

        getStatis() {
            order.statisOrder.call(this, {}, (data) => {
                for (var f in data.statis) {
                    this.$set(this.echarts_data.value_list, f - 1, data.statis[f]);
                }
            })
        }
    },
    mounted: function() {}
}