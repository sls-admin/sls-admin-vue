<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      :Rules="rules"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import ValidateJs from './Validate.js'

  export default ValidateJs
</script>
<style scoped>

</style>
