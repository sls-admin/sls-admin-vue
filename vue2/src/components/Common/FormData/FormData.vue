<template>
    <div class="form">
        <el-form style="margin:20px;width:60%;min-width:600px;" 
            label-width="100px" 
            ref='user_data'>
            <el-form-item class='edit-form'
                v-for='field in fields'
                :label="field.label" 
                :prop='field.key'>
                
                <!--
                    input,textarea 
                 -->
                <el-input
                    v-if='!field.type || field.type==="input" || field.type==="textarea"'
                    :type='field.type || "textarea"'
                    :v-model="field.value" 
                    :placeholder='field.desc'></el-input>
                
                <!-- 
                    radia,单选
                 -->
                <el-radio-group 
                    v-if='field.type==="radio"'
                    v-model="field.value.default">
                    <el-radio
                        v-for='item in field.value.list'
                        :label="item.value">{{item.text || item.value}}</el-radio>
                </el-radio-group>

                <!-- select,下拉框 -->
                <el-select
                    v-if='field.type==="select"'
                    v-model="field.value.default" 
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
                    v-model="field.value.default"></el-switch>

            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click='onSubmit'>提交</el-button>
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
