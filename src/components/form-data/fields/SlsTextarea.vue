<template>
  <div>
    <el-input
      type='textarea'
      v-model="submit_data[data.key]"
      :placeholder="data.desc"
      @click="onClick"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
      v-bind="attrs"></el-input>
  </div>
</template>

<script>
  import Common from './js/Common'
  import InputTextarea from './js/InputTextarea'

  var Js = Common('sls-textarea')
  Js.mixins = [InputTextarea]
  export default Js
</script>

<style scoped lang="less">

</style>
