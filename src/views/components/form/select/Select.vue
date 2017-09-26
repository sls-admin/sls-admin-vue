<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import SelectJs from './Select.js'

  export default SelectJs
</script>
<style scoped>

</style>
