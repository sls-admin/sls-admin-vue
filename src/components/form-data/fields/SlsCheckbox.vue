<template>
  <div>
    <!-- 普通CheckBox -->
    <el-checkbox-group
      @change="onChange"
      v-bind="checkbox_group_attrs"
      v-model="submit_data[data.key]">
      <el-checkbox
        v-bind="checkbox_attrs"
        :key="index"
        :label="checkbox.value"
        v-for="(checkbox,index) in data.list">{{checkbox.text || checkbox.value}}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  import Common from './js/Common'

  var Js = Common('sls-checkbox')
  Js.mixins = [{
    computed: {
      checkbox_group_attrs () {
        return this.Data.checkbox_group_attrs || {}
      },
      checkbox_attrs () {
        return this.Data.checkbox_attrs || {}
      }
    },
    methods: {
      onChange (v) {
        if (Array.isArray(v)) {
          this.submit_info[this.data.key] = []
          v.forEach((item) => {
            this.submit_info[this.data.key].push(this.temp_field_obj[this.data.key][item])
          })
        }
        this.events.change && this.events.change({value: v, info: this.submit_info[this.data.key]})
      }
    }
  }]
  export default Js
</script>

<style scoped lang="less">

</style>
