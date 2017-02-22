import {
    user as UserApi
} from 'config/request.js';

import {
    ListData
} from 'common/';


module.exports = {
    name: 'list',
    components: {
        ListData
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

        onChangeCheckbox(ids, datas) {
            // console.log(ids);
            // console.log(datas);
        },

        onDelete(opts) {
            // this.$refs.list.onUpdateList(opts.batch_ids || opts.index);
        }
    },
    mounted() {
        this.getList();
    },
    watch: {
        '$route' (to, from) {

        }
    }
}