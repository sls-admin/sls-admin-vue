<template>
  <div>
    <el-switch
      @change="onChange"
      :on-text="data.value.on"
      :off-text="data.value.off"
      v-bind="switch_attrs"
      v-model="submit_data[data.key]"></el-switch>
  </div>
</template>

<script>
  import Common from './js/Common'

  var Js = Common('sls-switch')
  Js.mixins = [{
    computed: {
      switch_attrs () {
        return this.Data.switch_attrs || {}
      }
    },
    methods: {
      onChange (v) {
        this.submit_info[this.data.key] = ''
        this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][v ? 'on' : 'off']

        this.events.change && this.events.change({
          value: v,
          info: this.submit_info[this.data.key]
        })
      }
    },
    created () {
      this.temp_field_obj[this.data.key] = {}
      this.temp_field_obj[this.data.key].on = this.data.value.on
      this.temp_field_obj[this.data.key].off = this.data.value.off

      this.submit_info[this.data.key] = this.temp_field_obj[this.data.key][this.submit_data[this.data.key] ? 'on' : 'off']
    },
    mounted () {

    }
  }]
  export default Js
</script>
