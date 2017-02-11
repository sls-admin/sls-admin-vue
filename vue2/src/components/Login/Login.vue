<template>
    <div class="login" :style="winSize">
        <el-row>
            <el-col :span='24'>
                <div class="content">
                    <el-form label-position="left" label-width="0px" class="demo-ruleForm card-box loginform" 
                        :style="formOffset"
                        :model='data'
                        :rules="rule_data"
                        ref='data'>
                        <h3 class="title">系统登录</h3>
                        <el-form-item
                            prop='username'>
                            <el-input type="text" auto-complete="off" placeholder="账号" v-model='data.username'></el-input>
                        </el-form-item>
                        <el-form-item
                            prop='password'>
                            <el-input type="password" auto-complete="off" placeholder="密码" 
                                v-model='data.password'
                                @keyup.enter="login('data')"></el-input>
                        </el-form-item>
                        <el-checkbox checked style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
                        <el-form-item style="width:100%;">
                            <el-button type="primary" @click='login("data")'>登录</el-button>
                            <el-button>重置</el-button>
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
    .login{
        background: #1F2D3D;

        .card-box {
            box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
            -webkit-border-radius: 5px;
            border-radius: 5px;
            -moz-border-radius: 5px;
            background-clip: padding-box;
            margin-bottom: 20px;
            background-color: #F9FAFC;
            border: 2px solid #8492A6;
        }

        .title {
            margin: 0px auto 40px auto;
            text-align: center;
            color: #505458;
        }

         .loginform {
            width: 350px;
            padding: 35px 35px 15px 35px;
        } 
    }
</style>
