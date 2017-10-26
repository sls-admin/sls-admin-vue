export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        create_time: '2017-12-05',
        create_time_range_init: '2017-6-12 至 2017-9-16', // ['2017-6-12','2017-9-16']
        create_year: '2016',
        create_month: '11',
        create_week: '2017-3-8'
      },
      fields: [{
        label: '创建日期',
        type: 'date',
        key: 'create_time',
        placeholder: '开始日期',
        events: {
          change: (value) => {
            this.$message('值：' + value)
          }
        }
      }, {
        label: '默认日期范围',
        type: 'daterange',
        key: 'create_time_range_init',
        placeholder: '日期范围-默认',
        date_range_attrs: {
          'range-separator': ' 至 '
        },
        events: {
          change: ({value, info}) => {
            this.$message('字符串值：' + value + '；数组值：' + info)
          }
        }
      }, {
        label: '年',
        type: 'year',
        key: 'create_year',
        placeholder: '选择年份',
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      }, {
        label: '月',
        type: 'month',
        key: 'create_month',
        placeholder: '选择月份',
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      }, {
        label: '周',
        type: 'week',
        key: 'create_week',
        placeholder: '选择周',
        date_week_attrs: {
          format: 'yyyy - WW'
        },
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
