<template>
  <div class="form">
    <el-form label-width="100px" style="margin:20px;width:90%;min-width:600px;"
             :model="form_data"
             :rules="form_rules"
             ref='refForm'>
      <el-form-item label="订单名称" prop='name' style="width:600px;">
        <el-input v-model="form_data.name"></el-input>
      </el-form-item>
      <el-form-item label="订单状态" prop='status'>
        <el-select v-model="form_data.status" placeholder="请选择订单状态">
          <el-option value='1' label="待支付"></el-option>
          <el-option value='2' label="待配送"></el-option>
          <el-option value='3' label="待收货"></el-option>
          <el-option value='4' label="已完成"></el-option>
          <el-option value='5' label="已取消"></el-option>
          <el-option value='6' label="退单"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click='onSubmit("refForm")'>立即{{form_data.id ? '修改' : '添加'}}</el-button>
        <el-button @click='reset_form("form_data")'>重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import EditJs from './Edit.js'

  export default EditJs
</script>
<style scoped>

</style>
