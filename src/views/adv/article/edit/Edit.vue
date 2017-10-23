<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue='default_value'
      :Rules="rules"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import EditJs from './Edit.js'

  export default EditJs
</script>
<style scoped>

</style>
