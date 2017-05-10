<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button
                    type='danger'
                    icon='delete'
                    v-if='selection'
                    :disabled='batch_flag'
                    @click='onBtnEvent("BatchDelete")'>删除选中
            </el-button>

            <el-button
                    type='primary'
                    icon='add'
                    @click='onBtnEvent("Add")'>添加
            </el-button>

            <div class='list-header'>
                <slot name='list-header'></slot>
            </div>
        </el-col>

        <el-table border style="width: 100%" align='center'
                  :data="list"
                  @selection-change='onSelectionChange'>


            <el-table-column type="expand"
                             v-if='expand && expand.show && expand.show===true && (!expand.position || expand.position==="left")'>
                <template scope="props">
                </template>
            </el-table-column>

            <el-table-column v-if='selection'
                             type="selection"
                             width="55">
            </el-table-column>

            <template
                    v-for='(field,index) in fields'>
                <el-table-column
                        v-if='!field.type || field.type!=="image"'
                        :prop="field.key"
                        :label="field.label"
                        :align="field.align || 'center'"
                        :sortable="field.sort || false"
                        :formatter='field.formatter'
                        :filters='field.filter_list'
                        :filter-method="field.filter_method"
                        :filter-multiple="field.filter_multiple"
                        :style='field.style'
                        :width='field.width'>
                </el-table-column>
                <el-table-column
                        v-if='field.type && field.type==="image"'
                        :prop="field.key"
                        :label="field.label"
                        :align="field.align || 'center'"
                        :width='field.width'>
                    <template scope='scope'>
                        <img :src="(image_host || '')+scope.row[field.key]" alt="">
                    </template>
                </el-table-column>
            </template>


            <el-table-column
                    v-if='btn_info.show!==false'
                    :label="btn_info.label || '操作'"
                    :width="btn_info.width || 160"
                    :context="_self">
                <template scope='scope'>
                    <!-- @click='onGetInfo(scope.row,scope.$index,list,"select")' -->
                    <el-button
                            v-if='btn_info.select!==false'
                            type="info"
                            icon='view'
                            size="mini"
                            @click='onBtnEvent("Select",scope.row,scope.$index,list)'></el-button>
                    <el-button
                            v-if='btn_info.update!==false'
                            type="info"
                            icon='edit'
                            size="mini"
                            @click='onBtnEvent("Update",scope.row,scope.$index,list)'></el-button>
                    <el-button
                            v-if='btn_info.delete!==false'
                            type="danger"
                            icon='delete'
                            size="mini"
                            @click='onBtnEvent("Delete",scope.row,scope.$index,list)'></el-button>


                    <el-button
                            v-if='btn_info.list'
                            v-for='(btn,index) in btn_info.list'
                            :key='btn.text'
                            :type="btn.type || 'info'"
                            size="mini"
                            @click='onGetInfo(scope.row,scope.$index,list,btn.fn_type || btn.text)'>{{btn.text}}
                    </el-button>
                </template>
            </el-table-column>


            <el-table-column type="expand"
                             :context="_self"
                             v-if='expand && expand.show && expand.show===true && expand.position && expand.position==="right"'>
                <!--<slot name="list-expand" index="index"></slot>-->
                <template scope="scope">
                    <slot name="list-expand"
                          :data="scope.row"
                          :index="scope.$index"></slot>
                </template>
            </el-table-column>
        </el-table>
        <el-col :span="24" class='btm-action'>
            <!-- 
     
             -->
            <el-pagination
                    v-if='pagination  && pagination.total && pagination.total>0'
                    class='pagination'
                    :page-sizes="pagination.page_sizes"
                    :page-size="pagination.page_size"
                    :layout="pagination.layout"
                    :total="pagination.total"
                    :current-page='pagination.current_page'
                    @current-change='onChangeCurrentPage'
                    @size-change='onChangePageSize'>
            </el-pagination>
        </el-col>
    </div>
</template>

<script>
	import ListDataJs from './ListData.js';
	export default ListDataJs;
</script>
<style scoped lang='less'>
    .demo-form-inline {
        display: inline-block;
        float: right;
    }

    .btm-action {
        margin-top: 20px;
        text-align: center;
    }

    .actions-top {
        height: 46px;
    }

    .pagination {
        display: inline-block;
    }

    .list {

    table {

    img {
        max-width: 100%;
        height: auto;
    }

    }
    }

    .list-header {
        display: inline-block;
    }
</style>
