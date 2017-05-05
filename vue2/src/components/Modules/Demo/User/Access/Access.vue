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
                    v-model="$route.query.username" 
                    placeholder='用户名'></el-input>
            </el-form-item>
            <el-form-item class='edit-form' label="API路由">
                <!-- <el-select v-model="user_id" multiple placeholder="请选择接口">
                    <el-option 
                        v-for='user in user_list'
                        :value='user.id'
                        :label='user.username'></el-option>
                </el-select> -->
                <el-tree
                    class="filter-tree"
                    show-checkbox
                    node-key="path"
                    :data="api_routers"
                    :props="defaultApiRoutersProps"
                    @check-change='checkChangeApiRouters'>
                </el-tree>
            </el-form-item> 
            <el-form-item class='edit-form' label="web页面">
                <!-- :filter-node-method="filterNode" -->
                <el-tree
                    class="filter-tree"
                    show-checkbox
                    node-key="path"
                    :data="web_routers"
                    :props="defaultWebRoutersProps"
                    @check-change='checkChangeWebRouters'
                    ref="accesss">
                </el-tree>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="setUserAccess">设置权限</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import AccessJs from './Access.js';
    module.exports=AccessJs;
</script>
<style scoped>
    .edit-form{
        width:500px;
    }
</style>
