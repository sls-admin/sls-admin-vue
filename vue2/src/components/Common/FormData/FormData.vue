<template>
    <div class="form">
        <el-form style="" 
            label-width="100px" 
            ref='form-data'
            :rules='rules'
            :model='submit_data'>
            <el-form-item 
                class='edit-form'
                v-for='(field,index) in fields'
                :label="field.label" 
                :prop='field.key'
                :style="field.item_style">
                
                <!-- 单选CheckBox -->
                <el-checkbox 
                    v-if='field.type==="checkbox" && field.multiple!==true'
                    v-model="submit_data[field.key]">{{field.label}}</el-checkbox>

                <el-cascader
                    v-if='field.type==="cascader"'
                    :options="field.value.list"
                    :props="field.props || {}"
                    @active-item-change='onCascaderItemChange'></el-cascader>

                
                <!-- 复选CheckBox -->
                <!-- 是否全选全不选 -->
                <el-checkbox
                    v-if='field.checkall && typeof field.checkall==="object" && submit_data[field.key+checkall_temp]'
                    :indeterminate="submit_data[field.key+checkall_temp].indeterminate" 
                    v-model="submit_data[field.key+checkall_temp].value"
                    @change='onCheckallChange(field.key)'>{{submit_data[field.key+checkall_temp].text}}</el-checkbox>
                <!-- CheckBox选项列表 -->
                <el-checkbox-group 
                    v-if='(field.type==="checkbox" && field.multiple===true && !field.checkall) || (field.type==="checkbox" && field.multiple===true && field.checkall && submit_data[field.key+checkall_temp])'
                    v-model="submit_data[field.key+checkall_temp].checkbox_value"
                    @change='onCheckboxChange(field.key)'>
                        <el-checkbox
                            v-for='item in submit_data[field.key+checkall_temp].checkbox_list'
                            :label="item.value">{{item.text}}</el-checkbox>
                </el-checkbox-group>

                <!-- wangeditor -->
                <div
                    v-if='field.type==="editor"'
                    :id="field.id" 
                    :style="field.style"
                    v-html='submit_data[field.key]'></div>

                <!--
                    input,textarea 
                 -->
                <el-input
                    v-if='!field.type || field.type==="input" || field.type==="textarea"'
                    :type='!field.type ? "input" : field.type'
                    v-model="submit_data[field.key]" 
                    :placeholder='field.desc'></el-input>
                
                <!-- 
                    radia,单选
                 -->
                <el-radio-group 
                    v-if='field.type==="radio"'
                    v-model="submit_data[field.key]">
                    <el-radio
                        v-for='item in field.value.list'
                        :label="item.value">{{item.text || item.value}}</el-radio>
                </el-radio-group>

                <!-- select,下拉框 -->
                <el-select
                    v-if='field.type==="select" && submit_data[field.key]'
                    v-model="submit_data[field.key]" 
                    :multiple='field.multiple ? true : false' 
                    :placeholder="field.desc">
                    <el-option
                        v-for='item in field.value.list'
                        :value="item.value"
                        :label="item.text || item.value"></el-option>
                </el-select>
                
                <!-- 
                    switch，开关
                 -->
                <el-switch
                    v-if='field.type==="switch"' 
                    :on-text="field.value.on" 
                    :off-text="field.value.off" 
                    :disabled='field.disabled'
                    v-model="submit_data[field.key]"></el-switch>
                
                <!-- date，日期类型 -->
                <el-date-picker
                    v-if='field.type==="date"'
                    v-model="submit_data[field.key]"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    @change='field.change'
                   :picker-options="field.options">
                </el-date-picker>

                <!-- date，日期类型-选择范围 -->
                <!-- 
                    @change='field.change'
                 -->
                <el-date-picker
                    v-if='field.type==="daterange"'
                    v-model="submit_data[field.key]"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-年 -->
                <el-date-picker
                    v-if='field.type==="year"'
                    v-model="submit_data[field.key]"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-月 -->
                <el-date-picker
                    v-if='field.type==="month"'
                    v-model="submit_data[field.key]"
                    :type="field.type"
                    :placeholder="field.placeholder"
                    @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-周 -->
                <el-date-picker
                    v-if='field.type==="week"'
                    v-model="submit_data[field.key]"
                    :type="field.type"
                    :format="field.format"
                    :placeholder="field.placeholder"
                    @change='field.change'>
                </el-date-picker>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click='onSubmit("form-data")'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import FormDataJs from './FormData.js';
    module.exports=FormDataJs;
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
