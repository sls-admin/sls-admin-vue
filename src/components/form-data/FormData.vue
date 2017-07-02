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
                    v-bind="field.attrs || {}"
                    :key='index'
                    :label="field.label"
                    :prop='field.key'>


                <!--<sls-input
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='!field.type || field.type==="input"'></sls-input>

                <sls-textarea
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="textarea"'></sls-textarea>

                <sls-checkbox
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="checkbox"'></sls-checkbox>

                <sls-radio
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="radio"'></sls-radio>

                <sls-select
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="select"'></sls-select>

                <sls-switch
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="switch"'></sls-switch>

                <sls-cascader
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="cascader"'></sls-cascader>

                <sls-date
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="date"'></sls-date>
                <sls-date-range
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="daterange"'></sls-date-range>
                <sls-date-year
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="year"'></sls-date-year>
                <sls-date-month
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="month"'></sls-date-month>

                <sls-date-week
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="week"'></sls-date-week>

                <sls-time
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="time"'></sls-time>

                <sls-date-time
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="datetime"'></sls-date-time>

                <sls-date-time-range
                        :Data="field"
                        :SubmitData="submit_data"
                        v-if='field.type==="datetimerange"'></sls-date-time-range>-->

                <component
                        :Data="field"
                        :SubmitData="submit_data"
                        :SubmitInfo="submit_info"
                        :TempFieldObj="temp_field_obj"
                        :is="components[field.type] || 'SlsInput'"></component>
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
