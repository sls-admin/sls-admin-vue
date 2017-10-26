<template>
  <div class="login" :style="winSize">
    <el-row>
      <el-col :span='24'>
        <div class="content">
          <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform"
                   v-loading="login_actions.disabled"
                   :element-loading-text="'正在'+(register===true ? '注册' : '登录')+'...'"
                   :style="formOffset"
                   :model='data'
                   :rules="rule_data"
                   ref='data'>
            <h3 class="title">
                            <span
                              :class="[{active:register===false}]"
                              @click="toggleStatus(false)">系统登录</span>
              <span
                :class="[{active:register===true}]"
                @click="toggleStatus(true)">注册账号</span>
            </h3>
            <el-form-item
              prop='username'>
              <el-input type="text" auto-complete="off" placeholder="账号"
                        v-model='data.username'></el-input>
            </el-form-item>

            <el-form-item
              prop='password'>
              <el-input type="password" auto-complete="off" placeholder="密码"
                        v-model='data.password'
                        @keyup.native.enter="onLogin('data',true)"></el-input>
            </el-form-item>

            <el-form-item
              v-if="register===true"
              prop='repassword'>
              <el-input type="password" auto-complete="off" placeholder="确认密码"
                        v-model='data.repassword'
                        @keyup.native.enter="onRegister('data')"></el-input>
            </el-form-item>

            <el-checkbox style="margin:0px 0px 35px 0px;"
                         v-if="register===false"
                         :checked='remumber.remumber_flag'
                         v-model='remumber.remumber_flag'>记住密码
            </el-checkbox>
            <el-form-item style="width:100%;">
              <el-button type="primary"
                         v-if="register===false"
                         @click='onLogin("data")'>登录
              </el-button>
              <el-button type="primary"
                         v-if="register===true"
                         @click='onRegister("data")'>注册
              </el-button>
              <el-button @click='resetForm("data")'>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import LoginJs from './Login.js'

  export default LoginJs
</script>

<style scoped lang='less'>
  @import url(Login.less);
</style>
