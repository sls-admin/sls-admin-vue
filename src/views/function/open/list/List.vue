<template>
  <div class="list">
    <el-form :inline="true" :model='selectData' class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="姓名" v-model='selectData.name'></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="地址" v-model='selectData.address'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click='onSelectData'>查询</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%" align='center'>
      <el-table-column
        :prop="fields.date.info.prop"
        :label="fields.date.info.label"
        :align="fields.date.style.align"
        :width="fields.date.style.width"
        :sortable="fields.date.info.sortable">
      </el-table-column>
      <el-table-column
        :prop="fields.name.info.prop"
        :label="fields.name.info.label"
        :align="fields.name.style.align"
        :width="fields.name.style.width"
        :sortable="fields.name.info.sortable">
      </el-table-column>
      <el-table-column
        :prop="fields.sex.info.prop"
        :sortable="fields.sex.info.sortable"
        :label="fields.sex.info.label"
        :align="fields.sex.style.align"
        :width="fields.sex.style.width"
        :formatter="formatterSex"
        :filters="fields.sex.filter.list"
        :filter-method="filterSex"
        :filter-multiple="fields.sex.filter.multiple">
      </el-table-column>
      <el-table-column
        :prop="fields.status.info.prop"
        :label="fields.status.info.label"
        :align="fields.status.style.align"
        :width="fields.status.style.width"
        :sortable="fields.status.info.sortable"
        :formatter="formatterStatus"
        :filters="fields.status.filter.list"
        :filter-method="filterStatus"
        :filter-multiple="fields.status.filter.multiple">
      </el-table-column>
      <el-table-column
        :prop="fields.address.info.prop"
        :label="fields.address.info.label"
        :align="fields.address.style.align">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ListJs from './List.js'

  export default ListJs
</script>
<style scoped>

</style>
