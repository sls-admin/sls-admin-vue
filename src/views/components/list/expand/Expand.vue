<template>
  <div class="list">
    <list-data
      ref='list-data'
      :List='list'
      :Expand="expand"
      :FieldList='fields'>
      <template
        slot-scope="scope"
        slot="expand">
        <div>索引：{{scope.index}}</div>
        <div>地址：{{scope.data.address}}</div>
        <div>行数据：{{JSON.stringify(scope.data)}}</div>
      </template>
    </list-data>
  </div>
</template>

<script>
  import ExpandJs from './Expand.js'

  export default ExpandJs
</script>
<style scoped lang='less'>
  .demo-form-inline {
    display: inline-block;
    float: right;
  }

  .btm-action {
    margin-top: 20px;
    text-align: center;
  }

  .actions-top {
    height: 46px;
  }

  .pagination {
    display: inline-block;
  }
</style>
