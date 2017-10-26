export default {
  components: {},
  data () {
    return {
      default_value: {
        sex: 0
      },
      fields: [{
        label: '性别',
        key: 'sex',
        type: 'radio',
        desc: 'radio',
        list: [{
          text: '不限',
          value: 0
        }, {
          text: '男',
          value: 2
        }, {
          text: '女',
          value: 3
        }],
        events: {
          change: ({value, info}) => {
            this.$message('当前选中的值：' + value + '；当前选中的值对应的文本是：' + info)
          }
        }
      }]
    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
