import echarts from 'echarts'

export default {
  name: 'echarts',
  data () {
    return {
      chartDom: null,
      data: {}
    }
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      this.chartDom = echarts.init(document.getElementById('chartDom'))
      return this
    },
    update () {
      if (this.chartDom === null) {
        this.init()
      }
      this.chartDom.setOption({
        title: {
          text: 'bar Chart',
          subtext: '数据来自网络'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['2011年', '2012年']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
        },
        series: [{
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        }, {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }]
      })
    }
  },
  mounted: function () {
    this.init()
      .update(this.data)
  }
}
