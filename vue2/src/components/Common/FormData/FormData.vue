<template>
    <div class="form">
        <el-form style="" 
            label-width="100px" 
            ref='form-data'
            :rules='rules'
            :model='submit_data'>
            <el-form-item 
                class='edit-form'
                v-for='field in fields'
                :label="field.label" 
                :prop='field.key'
                :style="field.item_style">
                
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
