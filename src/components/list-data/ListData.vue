<template>
  <div class="list">

    <sls-table-head
      @onSearch="onSearch"
      @onBtnEvent="onBtnEvent"
      :Batch="batch"
      :Search="search"
      :BtnInfo="btn_info">
      <span slot="sls-header-after"><slot name="header-after"></slot></span>
      <span slot="sls-header-before"><slot name="header-before"></slot></span>
    </sls-table-head>

    <el-table border style="width: 100%" align='center'
              :data="list"
              @selection-change='onSelectionChange'>

      <el-table-column type="expand"
                       v-if='expand && expand.show && expand.show===true && (!expand.position || expand.position==="left")'>
        <template slot-scope="scope">
          <slot name="expand"
                :data="scope.row"
                :index="scope.$index"></slot>
        </template>
      </el-table-column>

      <el-table-column v-if='btn_info.batch!==false'
                       type="selection"
                       width="55">
      </el-table-column>

      <template
        v-for='(field,index) in fields'>
        <el-table-column
          v-if='!field.type'
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
          <template slot-scope='scope'>
            <img :src="(field.host || '')+scope.row[field.key]" alt="">
          </template>
        </el-table-column>
        <el-table-column
          v-if='field.type && field.type==="link"'
          :prop="field.key"
          :label="field.label"
          :align="field.align || 'center'"
          :width='field.width'>
          <template slot-scope='scope'>
            <a
              :target="field.link_target || '_self'"
              :href="scope.row[field.key]">{{field.link_text || scope.row[field.key]}}</a>
          </template>
        </el-table-column>
      </template>


      <el-table-column
        v-if="btn_info.all!==false"
        :label="btn_info.label || '操作'"
        :width="btn_info.width || 160"
        :context="_self">
        <template slot-scope='scope'>
          <el-button
            v-if='btn_info.list && btn_info.list_position && btn_info.list_position==="before" && ((!btn.condition || typeof btn.condition!=="function") || (typeof btn.condition==="function" && btn.condition({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btn:btn})===true))'
            v-for='(btn,index) in btn_info.list'
            :key='btn.text'
            :type="btn.type || 'info'"
            size="mini"
            @click='onCustomBtnEvent({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btnInfo:btn})'>
            {{typeof btn.text === 'string' ? btn.text : (typeof btn.text === 'function' ? btn.text({list: list,data : scope.row,dataIndex: scope.$index,btnIndex : index,btn      : btn}) : '')}}
          </el-button>


          <span v-if="btn_info.default!==false">
              <el-button
                v-if='btn_info.select!==false && ( (typeof btn_info.select!=="function") || (typeof btn_info.select==="function" && btn_info.select({type:"Delete",data:scope.row,dataIndex:scope.$index,list:list})===true) )'
                type="info"
                icon='view'
                size="mini"
                @click='onBtnEvent({type:"Select",data:scope.row,dataIndex:scope.$index,list:list})'>{{btn_info.select_text || ''}}</el-button>
              <el-button
                v-if='btn_info.update!==false && ( (typeof btn_info.update!=="function") || (typeof btn_info.update==="function" && btn_info.update({type:"Delete",data:scope.row,dataIndex:scope.$index,list:list})===true) )'
                type="info"
                icon='edit'
                size="mini"
                @click='onBtnEvent({type:"Update",data:scope.row,dataIndex:scope.$index,list:list})'>{{btn_info.update_text || ''}}</el-button>
              <el-button
                v-if='btn_info.delete!==false && ( (typeof btn_info.delete!=="function") || (typeof btn_info.delete==="function" && btn_info.delete({type:"Delete",data:scope.row,dataIndex:scope.$index,list:list})===true) )'
                type="danger"
                icon='delete'
                size="mini"
                @click='onBtnEvent({type:"Delete",data:scope.row,dataIndex:scope.$index,list:list})'>{{btn_info.delete_text || ''}}</el-button>
          </span>

          <!--
            my-key-listlmy-key-listlist,data:scope.row,dataIndex:scope.$index,btnIndex:index,btnInfo:btn}
          -->
          <el-button
                v-if='btn_info.list && (!btn_info.list_position || btn_info.list_position==="after") && ((!btn.condition || typeof btn.condition!=="function") || (typeof btn.condition==="function" && btn.condition({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btn:btn})===true))'
                v-for='(btn,index) in btn_info.list'
                :key='index'
                :type="btn.type || 'info'"
                size="mini"
                @click='onCustomBtnEvent({list:list,data:scope.row,dataIndex:scope.$index,btnIndex:index,btn:btn})'>
            {{typeof btn.text === 'string' ? btn.text : (typeof btn.text === 'function' ? btn.text({
						list     : list,
						data     : scope.row,
						dataIndex: scope.$index,
						btnIndex : index,
						btn      : btn
					}) : '')}}
                    </el-button>
        </template>
      </el-table-column>


      <el-table-column type="expand"
                       :context="_self"
                       v-if='expand && expand.show && expand.show===true && expand.position && expand.position==="right"'>
        <template slot-scope="scope">
          <slot name="expand"
                :data="scope.row"
                :index="scope.$index"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class='btm-action'>
      <el-pagination
        v-if='pagination  && ( (pagination.total!==undefined && pagination.total>0) || (pagination["page-count"]!==undefined && pagination["page-count"]>0) )'
        class='pagination'
        :page-sizes="pagination.page_sizes"
        :page-size="pagination.page_size"
        :page-count="pagination['page-count']"
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
  import ListDataJs from './ListData.js'

  export default ListDataJs
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
    /*line-height : 46px;*/
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
</style>
