<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import CascaderJs from './Cascader.js'

  export default CascaderJs
</script>
<style scoped>

</style>
