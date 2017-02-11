import {
    user as UserApi
} from 'config/request.js';

module.exports = {
    name: 'user',
    data() {
        return {
            user_data: {
                email: '',
                username: '',
                password: '123456',
                address: '',
                sex: '3',
                status: true,
                birthday: '1992-11-5'
            },
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
        save_user(userdata) {
            this.$refs[userdata].validate((valid) => {
                if (valid) {
                    // console.log(this[userdata]);

                    // console.log(this[userdata].status);

                    UserApi.saveUser.call(this, this[userdata], data => {
                        this.$router.push('/demo/user/list');
                    });
                }
            });
        },
        reset_user(userdata) {
            this.$refs[userdata].resetFields();
        },

        onChangeDate(val) {
            this.user_data.birthday = val;
        }
    },
    mounted() {
        if (this.$route.query.id) {
            UserApi.editUser.call(this, this.$route.query.id, (data) => {
                this.user_data = data.userinfo;
                this.user_data.status = this.user_data.status == 1 ? true : false;

            });
        }
    }
}