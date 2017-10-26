import echarts from 'echarts'

export default {
  name: 'echarts',
  data () {
    return {
      chartDom: null,
      data: {
        id: this.id,
        title: this.title,
        subtext: this.subtext,
        hover_title: this.hoverTitle,
        data_list: this.dataList,
        text_list: []
      }
    }
  },
  methods: {
    init () {
      // 基于准备好的dom，初始化echarts实例
      if (this.data.id) {
        this.chartDom = echarts.init(document.getElementById(this.data.id))
      }
      return this
    },
    update () {
      if (this.chartDom === null) {
        this.init()
      }
      this.chartDom.setOption({
        title: {
          text: this.data.title,
          subtext: this.data.subtext,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.data.text_list
        },
        series: [{
          name: this.data.hover_title,
          type: 'pie',
          radius: '55%',
          // center: ['50%', '60%'],
          data: this.data.data_list,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      })
    },

    updateTextList () {
      var data = this.data.data_list
      this.data.text_list = []
      for (var i = 0; i < data.length; i++) {
        this.data.text_list.push(data[i].name)
      }
      return this
    }
  },
  mounted: function () {
    this.updateTextList()
      .init()
      .update()
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: [String, Number],
    subtext: [String, Number],
    hoverTitle: [String, Number],
    dataList: {
      type: Array,
      required: true
    }
  },
  watch: {
    dataList (v) {
      this.data.value_list = v
      this.updateTextList().update()
    },
    title (v) {
      this.data.title = v
      this.update()
    },
    subtext (v) {
      this.data.subtext = v
      this.update()
    },
    hoverTitle (v) {
      this.data.hover_title = v
      this.update()
    }
  }
}
