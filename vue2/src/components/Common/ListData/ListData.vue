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
                v-if='btn_info.show!==false'
                :label="btn_info.label || '操作'"
                :width="btn_info.width || 160" 
                :context="_self">
                <template scope='scope'>
                    <el-button
                        v-if='btn_info.select!==false'
                        type="info" 
                        icon='view'
                        size="mini"
                        @click='onGetInfo(scope.row,scope.$index,list,"select")'></el-button>
                    <el-button
                        v-if='btn_info.update!==false'
                        type="info" 
                        icon='edit' 
                        size="mini"
                        @click='onGetInfo(scope.row,scope.$index,list,"update")'></el-button>
                    <el-button
                        v-if='btn_info.delete!==false'
                        type="danger" 
                        icon='delete' 
                        size="mini"
                        @click='onDelete(scope.row,scope.$index,list)'></el-button>


                    <el-button
                        v-if='btn_info.list'
                        v-for='btn in btn_info.list'
                        :type="btn.type || 'info'"
                        size="mini"
                        @click='onGetInfo(scope.row,scope.$index,list,btn.fn_type || btn.text)'>{{btn.text}}</el-button>
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
