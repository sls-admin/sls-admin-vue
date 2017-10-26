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
        text_list: this.textList,
        value_list: this.valueList
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

      if (this.chartDom) {
        this.chartDom.setOption({
          title: {
            text: this.data.title,
            subtext: this.data.subtext
          },
          tooltip: {},
          xAxis: {
            data: this.data.text_list
          },
          yAxis: {},
          series: [{
            name: this.data.hover_title,
            type: 'bar',
            data: this.data.value_list
          }]
        })
      }
    }
  },
  mounted: function () {
    this.init()
      .update(this.data)
  },
  props: {
    id: [String],
    title: [String, Number],
    subtext: [String, Number],
    hoverTitle: [String, Number],
    textList: {
      type: Array,
      required: true
    },
    valueList: {
      type: Array,
      required: true
    }
  },
  watch: {
    valueList (v) {
      this.data.value_list = v
      this.update()
    },
    textList (v) {
      this.data.text_list = v
      this.update()
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
