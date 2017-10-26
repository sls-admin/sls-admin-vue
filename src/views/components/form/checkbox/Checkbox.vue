<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import CheckboxJs from './Checkbox.js'

  export default CheckboxJs
</script>
<style scoped>

</style>
