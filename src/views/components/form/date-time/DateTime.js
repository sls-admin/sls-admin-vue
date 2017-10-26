export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        date_time: '',
        date_time_range: ''
      },
      fields: [{
        label: '日期时间',
        type: 'datetime',
        key: 'date_time',
        placeholder: '请选择日期时间',
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      }, {
        label: '日期时间范围',
        type: 'datetimerange',
        key: 'date_time_range',
        placeholder: '请选择日期范围',
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
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
