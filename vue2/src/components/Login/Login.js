import {
    user as UserApi
} from '../../config/request.js';

module.exports = {
    name: 'login',
    data() {
        return {
            winSize: {
                width: '',
                height: ''
            },

            formOffset: {
                position: 'absolute',
                left: '',
                top: ''
            },

            data: {
                username: '',
                password: ''
            },

            rule_data: {
                username: [{
                    required: true,
                    message: '用户名不能为空！',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: '密码不能为空！',
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        setSize() {
            this.winSize.width = $(window).width() + "px";
            this.winSize.height = $(window).height() + "px";

            this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
            this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
        },

        login(ref) {
            this.$refs[ref].validate((valid) => {
                if (valid) {
                    UserApi.login.call(this, this[ref], data => {

                        // console.log(data);
                        // return;

                        this.$store.dispatch('update_userinfo', {
                            userinfo: data.userinfo
                        }).then(() => {
                            this.$router.push('/demo/user/list');
                        });

                    });
                }
            });
        }
    },
    created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    }
}