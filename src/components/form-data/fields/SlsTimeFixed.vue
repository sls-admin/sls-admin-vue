<template>
  <div>
    <el-time-select
      @change="onChange"
      v-bind="time_attrs"
      v-model="submit_data[data.key]"
      :placeholder="data.desc">
    </el-time-select>
  </div>
</template>
<script>
  import Common from './js/Common'

  var Js = Common('sls-time')
  Js.mixins = [{
    computed: {
      time_attrs () {
        return this.Data.time_attrs || {}
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
