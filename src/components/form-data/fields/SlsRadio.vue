<template>
  <div>
    <el-radio-group
      v-model="submit_data[data.key]"
      :placeholder="data.desc"
      @change="onChange"
      v-bind="radio_group_attrs">
      <el-radio
        v-for='(item,index) in data.list'
        v-bind="radio_attrs"
        :key='index'
        :label="item.value">{{item.text || item.value}}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  import Common from './js/Common'

  var Js = Common('sls-radio')
  Js.mixins = [{
    computed: {
      radio_group_attrs () {
        return this.Data.radio_group_attrs || {}
      },
      radio_attrs () {
        return this.Data.radio_attrs || {}
      }
    },
    methods: {
      onChange (v) {
        this.submit_info[this.data.key] = ''
        this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][v]
        this.events.change && this.events.change({value: v, info: this.submit_info[this.data.key]})
      }
    }
  }]
  export default Js
</script>
