<template>
  <el-form style=""
           label-width="100px"
           ref='form-data'
           :inline="setting.inline"
           :rules='rules'
           :model='submit_data'>
    <el-form-item
      class='edit-form'
      v-for='(field,index) in fields'
      v-bind="field.attrs || {}"
      :key='index'
      :label="field.label"
      :prop='field.key'>

      <component
        :Data="field"
        :SubmitData="submit_data"
        :SubmitInfo="submit_info"
        :TempFieldObj="temp_field_obj"
        :is="components[field.type] || 'SlsInput'"></component>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click='onSubmit("form-data")'>提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import FormDataJs from './FormData.js'

  export default FormDataJs
</script>
<style scoped lang='less'>
  .demo-form-inline {
    display: inline-block;
    float: right;
  }
</style>
