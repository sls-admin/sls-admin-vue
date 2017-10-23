export default {
  components: {
    // FormData
  },
  data () {
    return {
      default_value: {
        fixed_create_time: '16:00',
        fixed_create_time_range: '',
        create_time: '2017-12-16 12:32',
        create_time_range: ''
      },
      fields: [{
        label: '固定时间',
        type: 'timefixed',
        key: 'fixed_create_time',
        placeholder: '创建时间',
        time_attrs: {
          'picker-options': {
            start: '13:00',
            step: '01:00',
            end: '21:00'
          }
        },
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      }, /* {
        label : '固定时间范围',
        type  : 'timefixedrange',
        key : 'fixed_create_time_range',
        placeholder: '创建时间',
        time_attrs : {
          'picker-options': {
            start: '13:00',
            step : '01:00',
            end  : '21:00'
          },
        },
        events  : {
            change: (value) => {
            this.$message('当前选中的值：' + value);
          }
        }
      }, */ {
        label: '任意时间',
        type: 'time',
        key: 'create_time',
        placeholder: '创建时间',
        time_attrs: {
          'picker-options': {
            selectableRange: '18:30:00 - 20:30:00'
          }
        },
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      } /*, {
        label: '任意时间范围',
        type: 'timerange',
        key: 'create_time_range',
        placeholder: '创建时间',
        time_attrs: {
          'picker-options': {
            selectableRange: '18:30:00 - 20:30:00'
          }
        },
        events: {
          change: (value) => {
            this.$message('当前选中的值：' + value)
          }
        }
      } */
      ]

    }
  },
  methods: {
    onSubmit (data) {
      this.$emit('onTest', data)
    }
  }
}
