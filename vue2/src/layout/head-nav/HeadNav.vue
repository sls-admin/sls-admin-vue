<template>
    <div>

        <header class="head-nav">
            <el-row>
                <el-col :span="4" class='logo-container'>
                    <img src="../../assets/logo-sm.png" class='logo' alt="">
                </el-col>
                <el-col :span="16">
                    <el-menu theme="dark" :default-active="$store.state.router.headerCurRouter" class="el-menu-demo"
                             mode="horizontal" unique-opened router>
                        <!-- v-if='!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[item.path]) || $store.state.user.userinfo.access_status!==1)' -->
                        <el-menu-item
                                v-for='(item,index) in $router.options.routes'
                                :index="item.path"
                                :key='item.path'
                                v-if='!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[item.path]) || $store.state.user.userinfo.access_status!==1)'>
                            {{item.name}}<!-- {{item.path}} -->
                        </el-menu-item>
                    </el-menu>
                </el-col>
                <el-col :span="4" class="userinfo">
                    <!-- <span class='username'><i class='fa fa-user'></i>{{this.$store.state.user.userinfo.username}}</span> -->
                    <span class='username'>
                        <el-dropdown
                                trigger="click"
                                @command='setDialogInfo'>
                            <span class="el-dropdown-link">
                                {{this.$store.state.user.userinfo.username}}<i
                                    class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command='info'>修改信息</el-dropdown-item>
                                <el-dropdown-item
                                        command='pass'
                                        v-if='$store.state.user.userinfo.is_update_pass'>修改密码</el-dropdown-item>
                                <el-dropdown-item
                                        command='set'
                                        v-if='$store.state.user.userinfo.pid==0'>系统设置</el-dropdown-item>
                                <el-dropdown-item
                                        command='logout'>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                    <i class="fa fa-sign-out logout" @click='logout'></i>
                </el-col>
            </el-row>
        </header>


        <el-dialog size="small" :title="dialog.title"
                   v-model="dialog.show_pass">
            <el-form style="margin:20px;width:80%;"
                     label-width="100px"
                     :model="dialog.user_info"
                     :rules="dialog.user_info_rules"
                     ref='user_info'>
                <el-form-item class='edit-form'
                              label="邮箱"
                              prop='email'>
                    <el-input v-model="dialog.user_info.email" disabled placeholder='常用邮箱'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                              label="用户名称"
                              prop='username'>
                    <el-input v-model="dialog.user_info.username" disabled placeholder='用户名'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                              label="当前密码"
                              prop='old_password'>
                    <el-input
                            type='password'
                            placeholder='当前密码'
                            auto-complete='off'
                            v-model="dialog.user_info.old_password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                              label="新密码"
                              prop='password'>
                    <el-input
                            type='password'
                            placeholder='新密码'
                            auto-complete='off'
                            v-model="dialog.user_info.password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                              label="确认密码"
                              prop='password_confirm'>
                    <el-input
                            type='password'
                            placeholder='确认密码'
                            auto-complete='off'
                            v-model="dialog.user_info.password_confirm"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_pass = false">取 消</el-button>
                <el-button type="primary" @click="updUserPass('user_info')">确 定</el-button>
            </span>
        </el-dialog>


        <el-dialog size="small" :title="dialog.title"
                   v-model="dialog.show_set">
            <el-form style="margin:20px;width:80%;"
                     label-width="100px"
                     v-model='dialog.set_info'
                     ref='set_info'>
                <el-form-item label="登录方式">
                    <el-select placeholder="请选择登录方式"
                               v-model='dialog.set_info.login_style'>
                        <el-option label="单一登录" value="1"></el-option>
                        <el-option label="多点登录" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="禁止修改密码">
                    <el-select placeholder="请选择用户"
                               multiple
                               v-model='dialog.set_info.disabled_update_pass'>
                        <!-- value的值的ID是number，disabled_update_pass的元素中的是字符串，
                            所以在value上，需要拼装一个空串，来转化
                            因为elementUI内部用了=== 
                        -->
                        <el-option
                                v-for='(user,index) in dialog.set_info.select_users'
                                :key='index'
                                :label='user.username'
                                :value='user.id+""'></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_set = false">取 消</el-button>
                <el-button type="primary" @click="onUpdateSetting">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
	import HeadNavJs from './HeadNav.js';
	export default HeadNavJs;
</script>

<style scoped lang='less'>
    .logo-container {
        height: 60px;
    }

    .logo {
        height: 50px;
        width: auto;
        margin-left: 10px;
        margin-top: 5px;
    }

    .fa-user {
        position: relative;
        top: -2px;
        margin-right: 4px;
    }

    .head-nav {
        width: 100%;
        height: 60px;
        background: #324057;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 99;
        color: #FFF;
        border-bottom: 1px solid #1F2D3D;

    .logout {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        float: right;
        cursor: pointer;
    }

    }
    .userinfo {
        text-align: right;
    }

    .username {
        height: 60px;
        line-height: 60px;
        cursor: pointer;

    .el-dropdown {
        color: #FFF;
    }

    }
</style>
