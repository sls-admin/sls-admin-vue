export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        love: ['chi', 'wan'],
        like: ['du']
      },
      fields: [{
        label: '爱好',
        type: 'checkbox',
        key: 'love',
        list: [{
          text: '吃',
          value: 'chi'
        }, {
          text: '喝',
          value: 'he'
        }, {
          text: '玩',
          value: 'wan'
        }],
        events: {
          change: ({info, value}) => {
            this.$message('当前选中的值：' + value.join(',') + '；当前选中的值对应的文本是：' + info.join(','))
          }
        }
      }, {
        label: '喜好',
        type: 'checkbox',
        key: 'like',
        list: [{
          text: '嫖',
          value: 'piao'
        }, {
          text: '赌',
          value: 'du'
        }, {
          text: '耍',
          value: 'shua'
        }]
      }]

    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
