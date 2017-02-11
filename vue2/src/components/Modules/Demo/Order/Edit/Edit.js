import {
    gbs
} from 'config/settings.js';

import {
    order
} from 'config/request.js';


module.exports = {
    name: 'edit-order',
    data() {
        return {
            form_data: {
                name: '',
                status: '1'
            },
            form_rules: {
                name: [{
                    required: true,
                    message: '订单名称不能为空！',
                    trigger: 'blur'
                }],
                status: [{
                    required: true,
                    message: '文章分类不能为空！',
                    trigger: 'change'
                }]
            }
        }
    },
    methods: {
        /**
         * 提交表单
         * @param  {string} formName 表单名称
         */
        onSubmit(formName) {
            var ref = this.$refs[formName];
            ref.validate((valid) => {
                if (valid) {
                    console.log(this.form_data);
                    order.saveOrder.call(this, this.form_data, (data) => {
                        console.log(data);
                    });
                }
            });
        },
        reset_form(form) {
            this.$refs[form].resetFields();
        },
    },
    created() {},
    mounted() {

    }
}