<template>
  <div>
    <el-date-picker
      @change="onChange"
      v-model="submit_data[data.key]"
      v-bind="date_attrs"
      type="daterange"
      :placeholder="data.desc">
    </el-date-picker>
  </div>
</template>
<script>
  import Common from './js/Common'

  var Js = Common('sls-date-range')
  Js.mixins = [{
    computed: {
      date_attrs () {
        return this.Data.date_range_attrs || {}
      },

      /**
       * 范围分隔符，默认为 ' - '
       * @returns {*|string}
       */
      range_separator () {
        return this.Data.date_range_attrs['range-separator'] || ' - '
      }
    },
    methods: {
      onChange (v) {
        this.submit_info[this.data.key] = v.split(this.range_separator)
        this.events.change && this.events.change({value: v, info: this.submit_info[this.data.key]})
      },

      /**
       * 如果传的默认值为字符串，自动转为数组
       */
      setValueStringToArray () {
        // 传了默认值且为字符串再处理
        if (typeof this.submit_data[this.data.key] === 'string' && this.submit_data[this.data.key]) {
          // 默认值必须包含分隔符
          if (this.submit_data[this.data.key].indexOf(this.range_separator) !== -1) {
            this.submit_data[this.data.key] = this.submit_data[this.data.key].split(this.range_separator)
          } else {
            console.error('日期范围默认值为数组。如果设置成了字符串，范围分隔符必须和设置的一样，默认分隔符为 " - "！')
          }
        }
      }
    },
    created () {
      this.setValueStringToArray()
    }
  }]
  export default Js
</script>
