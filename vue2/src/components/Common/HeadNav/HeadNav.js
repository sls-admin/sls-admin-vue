import {
    user as UserApi,
    system as SystemApi
} from '../../../config/request.js';

module.exports = {
    name: 'head-nav',
    data() {
        return {
            dialog: {
                show_set: false,
                show_pass: false,
                title: '修改密码',
                user_info: this.$store.state.user.userinfo,

                set_info: {
                    login_style: '',
                    disabled_update_pass: [],
                    select_users: []
                },

                user_info_rules: {
                    old_password: [{
                        required: true,
                        message: '旧密码不能为空！',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '新密码不能为空！',
                        trigger: 'blur'
                    }, {
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else {
                                if ('' !== this.dialog.user_info.password) {
                                    this.$refs.user_info.validateField('password_confirm');
                                }
                                callback();
                            }
                        }
                    }],
                    password_confirm: [{
                        required: true,
                        message: '确认密码不能为空！',
                        trigger: 'blur'
                    }, {
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.dialog.user_info.password) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }],
                }
            }
        }
    },
    mounted() {
        // this.onGetSetting();
    },
    methods: {
        logout() {
            this.$confirm('你确定退出登录么?', '确认退出', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('remove_userinfo').then(() => {
                    this.$router.push('/login');
                });
            });
        },

        setDialogInfo(cmditem) {
            if (!cmditem) {
                this.$message.error('菜单选项缺少command属性');
                return;
            }
            switch (cmditem) {
                case 'info':
                    this.$router.push({
                        path: '/demo/user/edit',
                        query: {
                            id: this.$store.state.user.userinfo.id
                        }
                    });
                    break;
                case 'pass':
                    this.dialog.show_pass = true;
                    this.dialog.title = '修改密码';
                    break;
                case 'set':
                    this.onGetSetting();
                    this.dialog.show_set = true;
                    this.dialog.title = '系统设置';
                    break;
            }
        },
        updUserPass(userinfo) {
            this.$refs[userinfo].validate((valid) => {
                if (valid) {
                    UserApi.updPass.call(this, {
                        old_password: this.dialog[userinfo].old_password,
                        password: this.dialog[userinfo].password,
                        password_confirm: this.dialog[userinfo].password_confirm
                    }, (data) => {
                        this.dialog.show_pass = false;
                        // this.$nextTick(() => {
                        this.$message.success('修改成功！');
                        // });
                    });
                }
            });
        },
        onGetSetting() {
            //获取系统设置信息
            if (this.$store.state.user.userinfo.pid == 0) {
                SystemApi.getSetting.call(this, (data) => {
                    // console.log(data);
                    if (data.setting_info.disabled_update_pass) {
                        data.setting_info.disabled_update_pass = data.setting_info.disabled_update_pass.split(',');
                    } else {
                        data.setting_info.disabled_update_pass = [];
                    }
                    data.setting_info.login_style = data.setting_info.login_style + '';

                    this.dialog.set_info = data.setting_info;
                });
            } else {
                this.$message.error('只有管理员才能操作！');
            }
        },
        onUpdateSetting() {
            // console.log(this.dialog.set_info.login_style);
            // console.log(this.dialog.set_info.disabled_update_pass);
            // console.log(this.dialog.set_info.id);

            SystemApi.updateSetting.call(this, {
                id: this.dialog.set_info.id,
                login_style: this.dialog.set_info.login_style,
                disabled_update_pass: this.dialog.set_info.disabled_update_pass && this.dialog.set_info.disabled_update_pass.length ? this.dialog.set_info.disabled_update_pass.join(',') : ''
            }, (data) => {
                // console.log(data);
                this.dialog.show_set = false;
            });
        }
    }
}