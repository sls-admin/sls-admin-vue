import {
    user as UserApi
} from 'config/request.js';

import {
    ListData,
    DialogInfo
} from 'common/';

module.exports = {
    name: 'list',
    components: {
        ListData,
        DialogInfo
    },
    data() {
        return {
            list: [],
            fields: [{
                key: 'username',
                label: '用户名'
            }, {
                key: 'email',
                label: '邮箱'
            }, {
                key: 'create_time',
                label: '创建时间',
                sort: true
            }, {
                key: 'sex',
                label: '性别',
                formatter: function(item) {
                    return item.sex == 1 ? '男' : (item.sex == 2 ? '女' : '保密');
                },
                filter_list: [{
                    text: '男',
                    value: 1
                }, {
                    text: '女',
                    value: 2
                }, {
                    text: '保密',
                    value: 3
                }],
                filter_method: function(value, item) {
                    return item.sex == value;
                },
                filter_multiple: true,
            }, {
                key: 'status',
                label: '状态',
                formatter: function(item) {
                    return item.status == 1 ? '启用' : '禁用';
                },
                filter_list: [{
                    text: '启用',
                    value: 1
                }, {
                    text: '禁用',
                    value: 2
                }],
                filter_method: function(value, item) {
                    return item.status == value;
                },
                filter_multiple: false,
            }],
            btn_info: {
                // show: false,
                label: 'Actions',
                width: 300,
                // delete: false,
                // select: false,
                // update: false,
                list: [{
                    text: '设置权限',
                    fn_type: 'access'
                }, {
                    text: '修改状态',
                    fn_type: 'status'
                }]
            },

            dialog: {
                title: '查看用户信息',
                show: false,
                data: {},
                fields: [{
                    key: 'email',
                    label: '邮箱'
                }, {
                    key: 'username',
                    label: '用户名'
                }, {
                    key: 'sex_text',
                    label: '性别'
                }, {
                    key: 'birthday',
                    label: '生日'
                }, {
                    key: 'address',
                    label: '地址'
                }, {
                    key: 'status_text',
                    label: '状态'
                }, {
                    key: 'create_time',
                    label: '创建时间'
                }]
            }
        }
    },
    methods: {
        /**
         * 获取用户信息列表方法
         */
        getList() {
            var data = {};
            UserApi.selectUser.call(this, data, (data) => {
                this.list = data.list;
            });
        },

        /**
         * 改变CheckBox事件
         * 和下面一样，这个是参数分开版
         */
        onChangeCheckbox(ids, datas) {

        },

        /**
         * 改变CheckBox事件
         * 和下面一样，这个是参数合并版
         */
        onChangeBoxObj(opts) {
            console.log(opts);
            this.$message.success('选中行的IDS：' + opts.ids);
        },

        /**
         * 点击按钮公用事件
         */
        onGetInfo(opts) {
            console.log(opts);
            switch (opts.type) {
                case 'select':
                    this.onDialogUserInfo(opts.row);
                    break;
                case 'update':
                    this.onUpdate(opts.row);
                    break;
                case 'status':
                    this.onStatus(opts.row);
                    break;
                case 'access':
                    this.onAccess(opts.row);
                    break;
            }
        },

        onDialogUserInfo(data) {
            data.sex_text = data.sex === 1 ? '男' : (data.sex === 2 ? '女' : '保密');
            data.status_text = data.status === 1 ? '启用' : (data.status === 2 ? '禁用' : '出错了');
            this.dialog.data = data;
            this.dialog.show = true;
        },


        onUpdate(data) {
            this.$message.success('点击的是修改按钮，用户名：' + data.username);
        },


        onStatus(data) {
            this.$message.success('点击的是自定义修改状态按钮，用户名：' + data.username);
        },

        onAccess(data) {
            this.$message.success('点击的是自定义设置权限按钮，用户名：' + data.username);
        },


        /**
         * 删除事件
         */
        onDelete(opts) {
            console.log(opts);
            if (opts.index >= 0) {
                this.$message.success('单个删除,行索引：' + opts.index);
            } else {
                this.$message.success('批量删除,行IDS：' + opts.batch_ids);
            }
        },
    },
    mounted() {
        this.getList();
    },
    watch: {
        '$route' (to, from) {

        }
    }
}