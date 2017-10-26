<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import RadioJs from './Radio.js'

  export default RadioJs
</script>
<style scoped>

</style>
