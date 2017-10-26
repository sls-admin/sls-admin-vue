<template>
  <div class="form">
    <form-data
      :DefaultValue="default_value"
      :FieldList='fields'
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import TextareaJs from './Textarea.js'

  export default TextareaJs
</script>
<style scoped>

</style>
