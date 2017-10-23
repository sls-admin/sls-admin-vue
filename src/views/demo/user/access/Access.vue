<template>
  <div class="form">
    <el-form style="margin:20px;width:60%;min-width:600px;"
             label-width="100px"
             :model='data'
             ref='user_data'>
      <el-form-item class='edit-form'
                    label="用户名称">
        <el-input
          :disabled='true'
          v-model="username"
          placeholder='用户名'></el-input>
      </el-form-item>

      <el-form-item class='edit-form' label="权限状态">
        <el-switch
          on-text="开启"
          off-text="关闭"
          v-model="data.access_status"></el-switch>
      </el-form-item>

      <!--<el-form-item class='edit-form' label="API路由">
          <el-tree
              class="filter-tree"
              show-checkbox
              node-key="path"
              :data="datas.api_routers"
              :props="props.api_routers"
              @check-change='checkChangeApiRouters'
              ref="apiRouters">
          </el-tree>
      </el-form-item>-->

      <el-form-item class='edit-form' label="web页面">
        <!-- :filter-node-method="filterNode" -->
        <el-tree
          class="filter-tree"
          show-checkbox
          node-key="access"
          :data="datas.web_routers"
          :props="props.web_routers"
          @check-change='checkChangeWebRouters'
          ref="webRouters">
        </el-tree>
      </el-form-item>

      <el-form-item class='edit-form' label="默认页面">
        <el-select v-model="data.default_web_routers" placeholder="此页面必须包含在选择的web页面中" style="width: 400px;">
          <el-option
            v-for='(value,key) in checkeds.web_routers'
            v-if="key.split('/').length===4"
            :value='key'
            :key="key"
            :label='value'></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="setUserAccess">设置权限</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import AccessJs from './Access.js'

  export default AccessJs
</script>
<style scoped>
  .edit-form {
    width: 500px;
  }
</style>
