<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                :disabled='batch_flag'
                @click='onDeleteUser(true)'>删除选中</el-button>
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="姓名" 
                        v-model='search_data.username'
                        clear></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="邮箱" v-model='search_data.email'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="地址" v-model='search_data.address'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click='onSearch'>查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table border style="width: 100%" align='center' 
            :data="user_list"
            @selection-change='onSelectionChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                :prop="fields.username.info.prop"
                :label="fields.username.info.label"
                :align="fields.username.style.align"
                :width="fields.username.style.width"
                :sortable="fields.username.info.sortable">
            </el-table-column>
            <el-table-column
                :prop="fields.email.info.prop"
                :label="fields.email.info.label"
                :align="fields.email.style.align"
                :sortable="fields.email.info.sortable">
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
            <!-- <el-table-column
                :prop="fields.birthday.info.prop"
                :label="fields.birthday.info.label"
                :align="fields.birthday.style.align"
                :width="fields.birthday.style.width"
                :sortable="fields.birthday.info.sortable">
            </el-table-column> -->
            <el-table-column
                :prop="fields.create_time.info.prop"
                :label="fields.create_time.info.label"
                :align="fields.create_time.style.align"
                :width="fields.create_time.style.width"
                :sortable="fields.create_time.info.sortable">
            </el-table-column>
            <!-- <el-table-column
                :prop="fields.address.info.prop"
                :label="fields.address.info.label"
                :align="fields.address.style.align">
            </el-table-column> -->
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
                label="操作"
                :width="$store.state.user.userinfo.pid==0 ? 200 : 136" 
                :context="_self">
                <template scope='scope'>
                    <el-button 
                        type="info" 
                        icon='view' 
                        size="mini"
                        @click='onSelectUser(scope.row)'></el-button>
                    <el-button 
                        type="info" 
                        icon='edit' 
                        size="mini"
                        @click='onEditUser(scope.row)'></el-button>
                    <el-button 
                        type="danger" 
                        icon='delete' 
                        size="mini"
                        @click='onDeleteUser(scope.row,scope.$index,user_list)'></el-button>

                    <!-- 不要试图强制打开这个操作，因为服务端做了验证，打开也没用n(*≧▽≦*)n -->
                    <el-button
                        v-if='$store.state.user.userinfo.pid==0'
                        size="mini"
                        :type="scope.row.status==1 ? 'danger' : 'info'" 
                        @click='onAccessUser(scope.row,scope.$index,user_list)'>{{scope.row.status==1 ? '禁用' : '启用'}}</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="用户信息" v-model="dialog.show" size="tiny">
            <el-form style="margin:20px;width:60%;min-width:100%" 
                label-width="100px" 
                :model="dialog.user_info">
                <el-form-item class='edit-form' 
                    label="邮箱" 
                    prop='email'>
                    {{dialog.user_info.email}}
                </el-form-item>
                <el-form-item class='edit-form' 
                    label="用户名称" 
                    prop='username'>
                    {{dialog.user_info.username}}
                </el-form-item>
                <el-form-item label="性别">
                    {{dialog.user_info.sex==1 ? '男' : (dialog.user_info.sex==2 ? '女' : '未知')}}
                </el-form-item>
                <el-form-item label="生日">
                    {{dialog.user_info.birthday}}
                </el-form-item>
                <el-form-item class="edit-form" 
                    label='地址'>
                    {{dialog.user_info.address}}
                </el-form-item>
                <el-form-item label="状态">
                    {{dialog.user_info.status==1 ? '启用' : '禁用'}}
                </el-form-item>
                <el-form-item label="创建时间">
                    {{dialog.user_info.create_time}}
                </el-form-item>
                <el-form-item label="最后更新时间">
                    {{dialog.user_info.update_time}}
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show = false">取 消</el-button>
                <el-button type="primary" @click="dialog.show = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ListJs from './List.js';
    module.exports=ListJs;
</script>
<style scoped lang='less'>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
</style>
