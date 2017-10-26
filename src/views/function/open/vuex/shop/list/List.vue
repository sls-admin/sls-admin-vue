<template>
  <div class="shop-list">
    <h3>商品信息</h3>
    <el-table :data="shop_list" border style="width: 100%">
      <el-table-column prop="id" label="ID" sortable width="100"></el-table-column>
      <el-table-column prop="name" label="菜品名称"></el-table-column>
      <el-table-column prop="price" label="菜品价格" width="120" sortable></el-table-column>
      <el-table-column label="数量" width="100" sortable inline-template :context="_self">
        <span>{{row.num}}</span>
      </el-table-column>
      <el-table-column inline-template :context="_self" label="操作" width="200">
                <span>
                    <el-button @click='add_db(row)' type="info" size="small">{{row.num ? '+' : '加入购物车'}}</el-button>
                    <el-button @click='reduce_db(row)' type="warning" size="small"
                               v-if='row.num && row.num>0'>-</el-button>
                </span>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import ListJs from './List.js'

  export default ListJs
</script>
<style scoped lang="less">
  .shop-list {
    h3 {
      text-align: center;
      margin-top: 20px;
    }
  }
</style>
