<template>
  <div>
    <el-date-picker
      type="month"
      @change="onChange"
      v-model="submit_data[data.key]"
      v-bind="date_attrs"
      :placeholder="data.desc">
    </el-date-picker>
  </div>
</template>
<script>
  import Common from './js/Common'

  var Js = Common('sls-date-month')
  Js.mixins = [{
    computed: {
      date_attrs () {
        return this.Data.date_attrs || {}
      }
    },
    methods: {
      onChange (v) {
        this.events.change && this.events.change(v)
      }
    }
  }]
  export default Js
</script>
