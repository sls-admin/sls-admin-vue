<template>
    <div class="login" :style="winSize">
        <el-row>
            <el-col :span='24'>
                <div class="content">
                    <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform"
                        v-loading="login_actions.disabled"
                        element-loading-text="正在登录..."
                        :style="formOffset"
                        :model='data'
                        :rules="rule_data"
                        ref='data'>
                        <h3 class="title">系统登录</h3>
                        <el-form-item
                            prop='username'>
                            <el-input type="text" auto-complete="off" placeholder="账号" 
                                v-model='data.username'
                                @keyup.native.enter="login('data')"></el-input>
                        </el-form-item>
                        <el-form-item
                            prop='password'>
                            <el-input type="password" auto-complete="off" placeholder="密码" 
                                v-model='data.password'
                                @keyup.native.enter="login('data')"></el-input>
                        </el-form-item>
                        <el-checkbox style="margin:0px 0px 35px 0px;"
                            :checked='remumber.remumber_flag'
                            v-model='remumber.remumber_flag'>记住密码</el-checkbox>
                        <el-form-item style="width:100%;">
                            <el-button type="primary" @click='login("data")'>登录</el-button>
                            <el-button @click='resetForm("data")'>重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import LoginJs from './Login.js';
    module.exports=LoginJs;
</script>

<style scoped lang='less'>
    @import url(Login.less);
</style>
