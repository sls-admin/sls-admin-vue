<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import InputJs from './Input.js'

  export default InputJs
</script>
<style scoped>

</style>
