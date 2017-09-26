<template>
  <div class="form">
    <form-data
      :DefaultValue="default_value"
      :FieldList='fields'
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import EditorJs from './Editor.js'

  export default EditorJs
</script>
<style scoped>

</style>
