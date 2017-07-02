<template>
    <div class="form">
        <el-form style=""
                 label-width="100px"
                 ref='form-data'
                 :inline="setting.inline"
                 :rules='rules'
                 :model='submit_data'>
            <el-form-item
                    class='edit-form'
                    v-for='(field,index) in fields'
                    :key='index'
                    :label="field.label"
                    :prop='field.key'
                    :style="field.style">

                <!-- 单选CheckBox -->
                <el-checkbox
                        v-if='field.type==="checkbox" && field.multiple!==true'
                        v-model="submit_data[field.key]">{{field.label}}
                </el-checkbox>

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
                        @change='onCheckallChange(field.key)'>{{submit_data[field.key+checkall_temp].text}}
                </el-checkbox>
                <!-- CheckBox选项列表 -->
                <el-checkbox-group
                        v-if='(field.type==="checkbox" && field.multiple===true && !field.checkall) || (field.type==="checkbox" && field.multiple===true && field.checkall && submit_data[field.key+checkall_temp])'
                        v-model="submit_data[field.key+checkall_temp].checkbox_value"
                        @change='onCheckboxChange(field.key)'>
                    <el-checkbox
                            v-for='(item,index) in submit_data[field.key+checkall_temp].checkbox_list'
                            :key='index'
                            :label="item.value">{{item.text}}
                    </el-checkbox>
                </el-checkbox-group>

                <!-- wangeditor -->
                <div
                        v-if='field.type==="editor"'
                        :id="field.id"
                        :style="field.style"></div>

                <!--
                    input,textarea 
                 -->
                <el-input
                        v-if='!field.type || field.type==="input" || field.type==="textarea"'
                        :type='!field.type ? "input" : field.type'
                        :disabled="field.disabled===true ? true : false"
                        v-model="submit_data[field.key]"
                        :placeholder='field.desc'></el-input>

                <!-- 
                    radio,单选
                 -->
                <el-radio-group
                        v-if='field.type==="radio"'
                        v-model="submit_data[field.key]">
                    <el-radio
                            v-for='(item,index) in field.value.list'
                            :key='index'
                            :label="item.value">{{item.text || item.value}}
                    </el-radio>
                </el-radio-group>

                <!-- select,下拉框 -->
                <el-select
                        @change="field.change"
                        :filterable="field.search===true ? true : false"
                        :clearable="field.clear===true ? true : false"
                        :style="field.style"
                        v-if='field.type==="select" && field.value && field.value.list && submit_data && ((field.multiple && Array.isArray(submit_data[field.key])) || !field.multiple)'
                        v-model="submit_data[field.key]"
                        :multiple='field.multiple ? true : false'
                        :placeholder="field.desc">
                    <el-option
                            v-for='(item,index) in field.value.list'
                            :key='index'
                            :value="item.value"
                            :label="item.text"></el-option>
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
                        v-if='field.type==="date" && field.change'
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
                        v-if='field.type==="daterange" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-年 -->
                <el-date-picker
                        v-if='field.type==="year" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-月 -->
                <el-date-picker
                        v-if='field.type==="month" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        @change='field.change'>
                </el-date-picker>

                <!-- date，日期类型-周 -->
                <el-date-picker
                        v-if='field.type==="week" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        :format="field.format"
                        :placeholder="field.placeholder"
                        @change='field.change'>
                </el-date-picker>


                <!-- time，时间类型 -->
                <el-time-select
                        v-if='field.type==="time" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        :placeholder="field.placeholder"
                        @change='field.change'
                        :picker-options="field.options">
                </el-time-select>


                <!-- 日期时间组合 -->
                <el-date-picker
                        v-if='field.type==="datetime" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
                        @change='field.change'
                        :placeholder="field.placeholder"
                        :picker-options="field.options">
                </el-date-picker>


                <!-- datetime，日期时间类型-选择范围 -->
                <!--
                    @change='field.change'
                 -->
                <el-date-picker
                        v-if='field.type==="datetimerange" && field.change'
                        v-model="submit_data[field.key]"
                        :type="field.type"
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
	export default FormDataJs;
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
</style>
