module.exports = {
    name: 'list',
    data() {
        return {

            fields: this.FieldList || [],
            submit_data: {},



            user_rules: {
                email: [{
                    required: true,
                    message: '邮箱不能为空！',
                    trigger: 'blur'
                }, {
                    type: 'email',
                    message: '邮箱格式不正确！',
                    trigger: 'blur'
                }],
                username: [{
                    required: true,
                    message: '用户名不能为空！',
                    trigger: 'blur'
                }],
                birthday: [{
                    required: true,
                    message: '生日不能为空！',
                    trigger: 'change'
                }],
                address: [{
                    required: true,
                    message: '地址不能为空！',
                    trigger: 'change'
                }]
            }
        }
    },
    methods: {
        onSubmit() {
            var fields = this.fields;
            console.log(fields);
            for (var i = 0; i < fields.length; i++) {
                var item = fields[i];
                if (typeof item.value !== 'object') {
                    this.submit_data[item.key] = item.value;
                } else {
                    this.submit_data[item.key] = item.value.default;
                }
            }


            this.$emit('onSubmit', {
                data: this.submit_data
            });
        }
    },

    mounted() {
        //console.log(this.FieldList);
    },

    /**
     * 接收参数
     * @type {Object}
     */
    props: {
        FieldList: {
            type: Array,
            required: true
        }
    },


    /**
     * 监控参数
     * @type {Object}
     */
    watch: {
        FieldList(v) {
            if (v) {
                this.fields = v;
            }
        }
    }
}