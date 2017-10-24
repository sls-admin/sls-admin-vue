export default {
  name: 'order-statis-pie',
  components: {},
  data () {
    return {
      echarts_data: {
        id: 'orderPieDefault',
        title: '饼状图初始化标题',
        subtext: '饼状图初始化描述信息',
        hover_title: '订单量',
        data_list: [{
          name: '待支付',
          value: '0'
        }, {
          name: '待配送',
          value: '0'
        }, {
          name: '待收货',
          value: '0'
        }, {
          name: '已完成',
          value: '0'
        }, {
          name: '已取消',
          value: '0'
        }, {
          name: '退单',
          value: '0'
        }]
      }
    }
  },
  methods: {
    onUpdateTitle () {
      this.echarts_data.title = '饼状图动态标题'
    },
    onUpdateSubtext () {
      this.echarts_data.subtext = '饼状图动态描述信息'
    },
    onUpdateHoverTitle () {
      this.echarts_data.hover_title = '饼状图动态鼠标放上去标题'
    },
    onUpdateValueList () {
      this.getStatis()
    },
    onUpdateTextList () {
      for (var i = 0; i < this.echarts_data.data_list.length; i++) {
        var value = this.echarts_data.data_list[i]
        value.name += '!'

        this.$set(this.echarts_data.data_list, i, value)
      }
    },

    getStatis () {
      this.$$api_order_statisOrder({
        data: {},
        fn: data => {
          for (var f in data.statis) {
            var value = this.echarts_data.data_list[f - 1]
            value.value = data.statis[f]
            this.$set(this.echarts_data.data_list, f - 1, value)
          }
        }
      })
    }
  },
  mounted: function () {

  }
}
