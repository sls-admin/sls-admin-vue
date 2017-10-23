export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        status: true
      },
      fields: [{
        key: 'status',
        type: 'switch',
        value: {
          on: '启用',
          off: '禁用'
        },
        desc: '',
        label: '状态',
        events: {
          change: ({info, value}) => {
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
