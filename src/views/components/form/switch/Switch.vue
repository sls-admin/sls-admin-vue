<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import SwitchJs from './Switch.js'

  export default SwitchJs
</script>
<style scoped>

</style>
