<template>
  <div class="list">
    <list-data
      ref='list-data'
      :List='list'
      :FieldList='fields'
      @onChangeCurrentPage="onChangeCurPage"
      @onChangePageSize="onChangeCurPageSize"
      :Pagination='pagination'></list-data>
  </div>
</template>

<script>
  import PaginationJs from './Pagination.js'

  export default PaginationJs
</script>
<style scoped lang='less'>

</style>
