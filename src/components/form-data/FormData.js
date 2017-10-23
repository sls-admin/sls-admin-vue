import Fields from './fields/'

export default {
  components: Fields,
  name: 'form-data',
  data () {
    return {
      setting: this.Setting,
      primary_key: this.PrimaryKey,
      fields: this.FieldList,
      components: {
        input: 'SlsInput',
        textarea: 'SlsTextarea',
        select: 'SlsSelect',
        radio: 'SlsRadio',
        switch: 'SlsSwitch',
        cascader: 'SlsCascader',
        checkbox: 'SlsCheckbox',
        date: 'SlsDate',
        daterange: 'SlsDateRange',
        year: 'SlsDateYear',
        month: 'SlsDateMonth',
        week: 'SlsDateWeek',
        time: 'SlsTime',
        timerange: 'SlsTimeRange',
        timefixed: 'SlsTimeFixed',
        timefixedrange: 'SlsTimeFixedRange',
        datetime: 'SlsDateTime',
        datetimerange: 'SlsDateTimeRange',
        editor: 'SlsEditor'
      },
      cur_component: '',
      temp_field_obj: {},
      submit_data: this.DefaultValue,
      submit_info: {},
      rules: this.Rules || {}
    }
  },
  methods: {
    /**
     * 表单提交事件
     */
    onSubmit (ref) {
      var data = {
        data: this.submit_data,
        info: this.submit_info
      }

      if (this.rules) {
        this.$refs[ref].validate((valid) => {
          if (valid) {
            this.$emit('onSubmit', data)
          }
        })
      } else {
        this.$emit('onSubmit', data)
      }
    }
  },
  created () {
  },
  mounted () {
    // console.log(this.fields);

  },
  props: {
    FieldList: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    Editor: {
      type: Object,
      default () {
        return {}
      }
    },
    Rules: {
      type: Object,
      default () {
        return {}
      }
    },
    DefaultValue: {
      type: Object,
      default () {
        return {}
      }
    },
    Setting: {
      type: Object,
      default () {
        return {}
      }
    },
    PrimaryKey: {
      type: String,
      default: 'id'
    }
  },

  /**
   * 监控参数
   * @type {Object}
   */
  watch: {
    FieldList: {
      deep: true,
      handler (v) {
        if (v) {
          this.fields = v
        }
      }
    },
    submit_data: {
      deep: true,
      handler (v) {

      }
    },
    DefaultValue: {
      deep: true,
      handler (v) {
        this.default_value = v
      }
    },
    wangeditor_update (v) {

    },
    Setting (v) {
      this.setting = v
    },
    PrimaryKey (v) {
      this.primary_key = v
    }
  }
}
