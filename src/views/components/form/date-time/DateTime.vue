<template>
  <div class="form">
    <form-data
      :FieldList='fields'
      :DefaultValue="default_value"
      @onSubmit='onSubmit'></form-data>
  </div>
</template>
<script>
  import DateTimeJs from './DateTime.js'

  export default DateTimeJs
</script>
<style scoped>

</style>
