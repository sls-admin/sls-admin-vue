<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                :disabled='batch_flag'
                @click='onDelete(true)'>删除选中</el-button>
        </el-col>

        <el-table border style="width: 100%" align='center' 
            :data="list"
            @selection-change='onSelectionChange'>
            <el-table-column v-if='selection'
                type="selection"
                width="55">
            </el-table-column>


            <el-table-column v-for='field in fields'
                :prop="field.key"
                :label="field.label"
                :align="field.align || 'center'"
                :sortable="field.sort || false"
                :formatter='field.formatter'
                :filters='field.filter_list'
                :filter-method="field.filter_method"
                :filter-multiple="field.filter_multiple">
            </el-table-column>
            


            <el-table-column
                label="操作"
                width="200" 
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
                        @click='onDelete(scope.row,scope.$index,list)'></el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import ListDataJs from './ListData.js';
    module.exports=ListDataJs;
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
