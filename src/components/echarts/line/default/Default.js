import echarts from 'echarts'

export default {
  name: 'echarts',
  data () {
    return {
      chartDom: null,
      data: {
        title: '垂直方向柱状标题',
        subtext: '子标题描述信息'
      }
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
          text: 'line Chart'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        }, {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }, {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }]
      })
    }
  },
  mounted: function () {
    this.init()
      .update()
  }
}
